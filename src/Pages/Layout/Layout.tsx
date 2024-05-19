//core
import React from 'react';
import { Outlet } from 'react-router-dom';
//components
import { Auth } from '../Auth';
import * as S from './styled';
import { LinkPages } from '../../components';

export const Layout: React.FC = () => {
  return (
    <>
      <S.Header>
        <LinkPages title={'Home'} path={'/'} />
        <Auth />
      </S.Header>
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </>
  );
};
