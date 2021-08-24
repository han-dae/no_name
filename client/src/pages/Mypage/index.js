import React from 'react';
import GoodsNavbar from 'components/shared/goodsNavbar/goodsNavbar';
import { Page } from 'assets/commonStyle/styles';
import {
  Background,
  Box,
  Profile,
  BtnContainer,
  UserBox,
  Card,
} from './styles';
import { Btn } from 'assets/commonStyle/styles';

import { useSelector } from 'react-redux';

const Mypage = () => {
  const { userName } = useSelector((state) => state.auth);
  return (
    <Page>
      <Background>
        <GoodsNavbar />
        <Box>
          <Profile>
            <div>🌸 {userName} 님의 프로필</div>
            <div>
              <p>
                <b>생년 월일</b>:
              </p>
              <p>
                <b>주소</b>:
              </p>
              <p>
                <b>닉네임</b>: {userName}
              </p>
            </div>
            <BtnContainer>
              <Btn>프로필 편집</Btn>
              <Btn>비밀번호 변경</Btn>
            </BtnContainer>
          </Profile>
          <UserBox>
            <Card>
              <p>✔️ 최근 본 상품</p>
            </Card>
            <Card>
              <p>✔️ 마음에 들어한 상품</p>
            </Card>
            <Card>
              <p>✔️ 내 문의 글</p>
            </Card>
          </UserBox>
        </Box>
      </Background>
    </Page>
  );
};

export default Mypage;