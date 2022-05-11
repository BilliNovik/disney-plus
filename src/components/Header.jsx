import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/user/userSlice';

function Header() {

    const dispatch = useDispatch();

    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(setUser(result.user))
                console.log(result.user);
            })
            .catch((err) => console.error(err.message));
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>
                <a>HOME</a>
                <a>SEARCH</a>
                <a>WATCHLIST</a>
                <a>ORIGINALS</a>
                <a>MOVIES</a>
                <a>SERIES</a>
            </NavMenu>
            <Login onClick={handleAuth}>LOGIN</Login>
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

export default Header