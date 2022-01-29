import styled from 'styled-components';
import { useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import { auth , provider} from '../firebase';
import {selectUserName, 
        selectUserPhoto,
        setUserLoginDetails,
        setSignOutState, }
        from "../features/user/userSlice";
import { useEffect } from 'react';

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        if (!userName) {
        auth
            .signInWithPopup(provider)
            .then( (result) => {
                setUser(result.user);
            })
            .catch((error) => {
               alert(error.message);
            });

        } else if (userName) {
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                history.push('/')
            })
            .catch((err) => (err.message));
        }
    };
    const setUser = (user) =>   {
        dispatch (
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    useEffect(()=>{
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push("/home")
                }    
            }
        );
    }, [userName]);

    return (
    <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="Disney+" />
        </Logo>
        
        { !userName ? (
        <Login onClick={handleAuth}>LOGIN</Login>
        ):(
        <>
        <NavMenu>
            <a href='/WATCHLIST'>
                <img src='/images/home-icon.svg' alt='WATCHLIST'/>
                <span>HOME</span>
            </a>
            <a href='/search'>
                <img src='/images/search-icon.svg' alt='SEARCH'/>
                <span>SEARCH</span>
            </a>
            
            <a href='/ORIGINALS'>
                <img src='/images/original-icon.svg' alt='ORIGINALS'/>
                <span>ORIGNALS</span>
            </a>
            <a href='/movies'>
                <img src='/images/movie-icon.svg' alt='MOVIES'/>
                <span>MOVIES</span>
            </a>
            <a href='/series'>
                <img src='/images/series-icon.svg' alt='SERIES'/>
                <span>SERIES</span>
            </a>
            
        </NavMenu>
        <SignOut>
            <UserImg src={userPhoto} alt={userName}/>
            <DropDown>
                <span onClick={handleAuth}>Sign out</span>
            </DropDown>  
        </SignOut>

        
        </>
        )}
    </Nav>
    );
};
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left:0;
    right:0;
    height:80px;
    background-color:#090b13;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3vw;
    letter-spacing:16px;
    z-index:3;  
    `;
const Logo= styled.a`
    width:13vw;
    padding:0;
    margin-top: 5px;
    min-height:55px;
    max-height: 70px;
    max-width:110px;
    min-width:85px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
    

    `;
const NavMenu = styled.div`
    align-items:center;
    display:flex;
    flex-flow: row nowrap;
    height:100%;
    justify-content:flex-end;
    margin:0px;
    padding: 0px;
    position: relative;
    margin-right:auto;
    margin-left:25px;
   

    @media (max-width:768px){
        display:none;
    }
    a {
    display: flex;
    align-items: center;
    padding: 0 14px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
        }
    span{
        color:rgb(249,249,249);
        font-size:14px;
        line-height:1.08px;
        letter-spacing:1.18px;
        padding:2px 4px;
        white-space:nowrap;
        position:relative;
        
        &:before{
            
            background-color:rgb(249,249,249);
            border-radius: 0px 0px 4px 4px;
            bottom:-9px;
            height:2px;
            left:0px;
            right:0px;
            content: "";
            opacity: 0;
            position: absolute;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility:hidden;
            width: auto;
        }
    }

    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }   
}`;
const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    border:1px solid #f9f9f9;
    border-radius:4px;
    letter-spacing: 2px;
    padding: 9px 18px;
    transition: all 0.2s ease 0s;
    
    &:hover {
        background-color: rgb(249,249,249);
        color: rgba(0,0,0,0.6);
        border-color: transparent;
    }
`;
const UserImg= styled.img`
    height:100%;
    `;
const DropDown = styled.div`
    position:absolute;
    top: 48px;
    right:0px;
    background: rgb(19,19,19);
    border: 1px solid rgb(151,151,151,0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 12px;
    font-size: 14px;
    letter-spacing: 3px;
    opacity:0;
    white-space: nowrap;
`;
const SignOut = styled.div`
    position: relative;
    display: flex;
    height: 48px;
    width: 48px;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration:1s;
        }
    }

`;
export default Header;
