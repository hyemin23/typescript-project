import React from "react";
import { useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

interface IProps{
    closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({ closeModal }) => {
  //나중에 회원가입 / 로그인 모드에 따라서 모달 분기

  return (
    <>
      {/* {authMode === "signup" && <SignUpModal closeModal={closeModal} />} */}
      {/* {authMode === "login" && <div>로그인</div>} */}
      <LoginModal closeModal={closeModal} />
    </>
  );
};

export default AuthModal;
