import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'

export const Background = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0,0,0,0.6);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`

export const ModalWrapper = styled.div`
    width: 550px;
    height: 280px;
    background: #141414;
    color: #fff;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    margin: 0 30px 0 30px;
    border: 2px solid #202020;

    @media screen and (max-width: 480px) {
        margin: 0 15px 0 15px;
    }
`

export const CloseModalButton = styled(FaTimes)`
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 20px;
    z-index: 10;
    color: #dddddd;

    &:hover {
        color: #fff;
    }
`

export const ConnectButtonWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    p {
        text-align: center;
        cursor: pointer;
        margin: 10px 0;

        &:hover {
            color: #ddd;
        }
    }
`

export const ConnectButton = styled.button`
    min-width: 250px;
    height: 50px;
    border-radius: 50px;
    border: 2px solid #44f8bd;
    background: transparent;
    white-space: nowrap;
    padding: 25px 25px;
    margin-top: 20px;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: #44f8bd;
        color: black;

        img {
            filter: invert(1);
            -webkit-filter: invert(1)
        }
    }
`

export const ButtonLogo = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

export const ModalHeader = styled.h1`
    margin-top: 0px;
    padding: 20px;
    font-size: 22px;
`