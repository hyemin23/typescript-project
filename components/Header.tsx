import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import SearchIcon from "../public/static/svg/search.svg";
import palette from "../styles/palette";
import useModal from "../hooks/useModal";
import HeaderAuths from "./HeaderAuths";
import HeaderUserProfile from "./HeaderUserProfile";

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

/** react-outside-click-handler div입니다 */
    .header-logo-wrapper + div{
      position: relative;
    }


    .header-logo{

    & .header-logo-wrapper{
        display: flex;
        align-items: center;
        overflow: hidden;
        
            & img{
              width: 130px;
              height: 110px;
              display: block;
            }
        }
    }

    .header-list-wrapper{
        display: flex;
        justify-content: center;
        & ul{
            display: flex;
            align-items: center;
           
            & li{
                padding :10px 0 0 0;
                margin : 0 30px;
                font-size: 16px;
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
        margin-top: 10px;
        height: 50px;
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

    .header-usermenu{
      position:absolute;
      right: 0;
      top:52px;
      width:240px;
      padding: 8px 0;
    

    }


`;

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Container>
      <div className="header-logo">
        <Link href="/">
          <a className="header-logo-wrapper">
            {/* <Logo className="header-logo" /> */}
            <img src="/static/png/fullLogo2.png" alt="" />
            {/* <img src="/static/png/logoTitile.png" alt="" width="40%" /> */}
            {/* <LogoTextIcon /> */}
          </a>
        </Link>
      </div>

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
          {!isLoggedIn && <HeaderAuths />}
          {isLoggedIn && <HeaderUserProfile />}
        </ul>
      </div>

    </Container>
  );
};

export default Header;
