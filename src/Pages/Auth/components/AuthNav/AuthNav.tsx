//core
import React from 'react';
//components
import { LinkPages } from '../../../../components';
import * as S from './styled';
//other
import { ROUTES } from '../../../../constants';

export const AuthNav: React.FC = () => {
  return (
    <S.Wrapper>
      <LinkPages title={'Sing in'} path={ROUTES.AUTH.PATH} />
    </S.Wrapper>
  );
};
