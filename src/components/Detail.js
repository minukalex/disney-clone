import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import db from '../firebase';
import styled from 'styled-components';

const Detail = (props) =>{
    const {id} = useParams();
    const [detailData, setDetailData] = useState({});
    
    useEffect(() => {
        db.collection('movies')
            .doc(id)
            .get()
            .then((doc) => {
            if (doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log('no such document in firebase');
            }

        })
        .catch((error)=> {
            console.log('Error getting document:', error);
        });
    }, [id]);


    return (
    <Container>
        <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />  
        </Background>

        <ImageTitle>
            <img alt={detailData.title} src={detailData.titleImg} />    
        </ImageTitle>

        <ContentMeta>
            <Controls>
                <Player>
                    <img src='/images/play-icon-black.png'/>
                    <span>
                        Play
                    </span>
                </Player>
                <Trailer>
                    <img src='/images/play-icon-white.png'/>
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span>

                    </span>
                </AddList>
                <GroupWatch>
                    <div>
                        <img src='/images/group-icon.png' alt=''/>
                    </div>
                </GroupWatch>
            </Controls>
            <SubTitle>
            {detailData.subTitle}
            </SubTitle>
            <Description>
            {detailData.description}
            </Description>
        </ContentMeta>    
    </Container> )
}
const Container = styled.div`
    position: absolute;
    padding-top: 80px;
    overflow-x: hidden;
    display: block;
    top:80px;
    padding: 0 calc(3.5vw + 5px); 
        
`;
const Background = styled.div`
    left: 0px;
    right:0px;
    top:0px;
    opacity: 0.8;
    position: fixed;
    z-index:-1;
    img{
        width: 100vw;
        height: 100vh;
        @media (max-width: 768px){
            width: initial;
        }
    }
`;
const ImageTitle = styled.div`
    padding-bottom: 24px;
    display: flex;
    -webkit-box-pack: start;
    align-items: flex-end;
    justify-content: left;
    
    min-height: 170px;
    height: 30vw;
    width:100%;
    
    
    img{
        max-width:650px;
        min-width: 250px;
        width: 35.5vw;
    }
`;
const ContentMeta = styled.div`
    max-width: 874px;
`;
const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px ;
    min-height: 56px;

`;
const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0pc 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    display: flex;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border: none;
    color: rgb(0, 0, 0);
    font-size: 16px; 
    
    img {
    width: 32px;
    }

    &:hover {
        background: rgb(198, 198, 198);
        
    }
    @media(max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 14px;
        img{
        width: 25px;
    }
    }
`;
const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;
  
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    border: 2px solid white;
    div{
        height: 40px;
        width: 40px;
        background: rgb(0,0,0);
        border-radius: 50%;
        img{
            width: 100%;
        }
    }
`;
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    @media (max-width:798px) {
        font-size:12px;
    }
`;
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    color: rgb(249,249,249);
    @media (max-width: 768) {
        font-size: 14px;

    }
    
    
`;

export default Detail;
