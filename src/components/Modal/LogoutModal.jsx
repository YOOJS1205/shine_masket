import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LogoutModal(){


  // const LogoutBtn = () => {
  //   setLogout(!logout);
  // }
  // console.log(logout);

  return(
    <>
      <LogoutWrap>
        <span>로그아웃 하시겠어요?</span>
        <ul>
          <Link to="/">취소</Link>
          <Link to="/">로그아웃</Link>
        </ul>
      </LogoutWrap>
    </>
  )
} 


const LogoutWrap = styled.div`
  width:450px;
  height:600px;
  background:blue;
  margin:0px auto;
`