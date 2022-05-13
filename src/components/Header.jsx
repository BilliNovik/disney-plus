import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setSignOut } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

function Header() {

    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const navigate = useNavigate()

    React.useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUserData(user)
                navigate("/home")
            }
        })
    }, [user.name])

    const handleAuth = () => {
        if (!user.name) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    dispatch(setUserData(result.user))
                })
                .catch((err) => console.error(err.message));
        } else if (user.name) {
            const auth = getAuth();

            signOut(auth)
                .then(() => {
                    dispatch(setSignOut())
                    navigate("/")
                })
                .catch((err) => console.error(err.message));
        }
    }

    const setUserData = (user) => {
        dispatch(setUser({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            {
                !user.name ?
                    <Login onClick={handleAuth}>LOGIN</Login>
                    : <>
                        <NavMenu>
                            <a>HOME</a>
                            <a>SEARCH</a>
                            <a>WATCHLIST</a>
                            <a>ORIGINALS</a>
                            <a>MOVIES</a>
                            <a>SERIES</a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={user.photo} alt={user.name} />
                            <DropDown>
                                <span onClick={handleAuth}>SIGN OUT</span>
                            </DropDown>
                        </SignOut>
                    </>
            }
        </Nav>
    )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 2;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-bottom: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a {
        display: block;
        margin: 0px 13px;
        padding: 10px 2px;
        font-weight: 600;
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        white-space: nowrap;
        position: relative;
        cursor: pointer;
        &:before {
            content: "";
            background-color: rgb(249, 249, 249);
            bottom: 2px;
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
        
        &:hover {
            &:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            }
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 6px 14px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 49px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover{
        ${DropDown}{
            opacity: 1;
        }
    }
`;

export default Header