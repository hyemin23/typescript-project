import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../public/static/svg/logo.svg";
import SearchIcon from "../public/static/svg/search.svg";
import LogoTextIcon from "../public/static/svg/logoText.svg";
import HamburgerIcon from "../public/static/svg/hamburgerIcon.svg";
import ProfileImg from "../public/static/svg/profileImg.svg";
import palette from "../styles/palette";
import SignUpModal from "./auth/SignUpModal";
import useModal from "../hooks/useModal";

const Container = styled.div`

    position: sticky;
    top : 0;
    width : 100%;
    height:80px;
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding : 0 80px;
    background-color: white;
    box-shadow: rgba(0,0,0,0.08)0px 1px 12px;
    z-index: 10;
    
    
    .header-logo-wrapper{
        display: flex;
        align-items: center;

        .header-logo{
            margin-right: 6px;
        }
    }

    .header-list-wrapper{
        display: flex;

        & ul{
            display: flex;
            align-items: center;
           
            & li{
                padding :10px 0 0 0;
                margin : 0 30px;
                font-size: 20px;
                font-weight: 500;
                cursor: pointer;

                 &:hover span{                     
                    text-shadow  : 0px 2px 8px rgba(0,0,0,0.2);
                }
            }
            
        }

    }

    /*로그인 회원가입 */
    .header-auth-buttons{
        .header-sign-up-button{
            height: 42px;
            margin-right:8px;
            padding : 0 16px;
            border : 0;
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover{
                background-color: ${palette.gray_f7};
            }
        }

        .header-login-buton {
            height: 42px;
            padding: 0 16px;
            border : 0;
            box-shadow: 0px 1px 2px rgba(0,0,0, 0.18);
             border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
              &:hover{
                box-shadow  : 0px 2px 8px rgba(0,0,0,0.12);
            }
        }
    }

    .header-user-profile{
        display: flex;
        align-items: center;
        height: 42px;
        border : 0;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.18);
        border-radius: 21px;
        background-color: white;
        cursor: pointer;
        outline: 0;
        &:hover{
            box-shadow: 0px 2px 8px rgba(0,0,0,0.12);
        }

        .header-user-profile-image{
            margin-left:8px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
`;

const Header: React.FC = () => {
  const { openModal, ModalPortal } = useModal();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Container>
      <Link href="/">
        <a className="header-logo-wrapper">
          <Logo className="header-logo" />
          <LogoTextIcon />
        </a>
      </Link>

      <div className="header-list-wrapper">
        <ul>
          <li>
            <div>
              <SearchIcon />
            </div>
          </li>
          <li>
            <div>
              <span>상품</span>
            </div>
          </li>
          <li>
            <div>
              <span>Q &amp; A</span>
            </div>
          </li>
        </ul>
        {!isLoggedIn && (
        <div className="header-auth-buttons">
          <button type="button" className="header-sign-up-button" onClick={openModal}>
            회원가입
          </button>
          <button type="button" className="header-login-buton">
            로그인
          </button>
        </div>
        )}
        {isLoggedIn && (
        <button className="header-user-profile" type="button">
          <HamburgerIcon />

          {/* 나중에 밑에 Img태그로 대체 */}
          <ProfileImg className="header-user-profile-image" />
          <img
            src=""
            className=""
            alt=""
          />
        </button>
        )}
      </div>
      {/* 모달 */}
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </Container>
  );
};

export default Header;
