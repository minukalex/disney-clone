import styled from 'styled-components';
const Viewers = (props)=> {
    return (
        <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true}muted={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted={true} allow="autoplay">
            <source
                src="/videos/1564676296-national-geographic.mp4"
                type="video/mp4"
            />
            </video>
        </Wrap>
        </Container>
    )
};
const Container = styled.main`

    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap:25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media (max-width: 768px){
        grid-template-columns: repeat(
            1, minmax(0,1fr)
        )
    };
`
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 13px;
    border: 4px solid rgb(250, 255, 255, 0.1);
    box-shadow: 5px 5px 20px 5px #0F0F0F;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    img{
        inset:0px;
        display:block;
        object-fit:cover;
        width:100%;
        height: 100%;
        opacity:1;
        position:absolute;
        transition: opacity 500ms ease-in-out 0s;
        width:100%;
        z-index: 1;
        top: 0;
    }
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top:0px;
        opacity: 0;
        z-index: 0;

    }
    &:hover{
        border-color:rgb(250, 255, 255,0.8);
        transform: scale(1.05);
        animation-duration: 500ms;
        transition: all 250ms cubic-bezier(0.25, 0.453, 0.45, 0.94);  
        video {
            opacity:1;
        }
    }
    `;
export default Viewers