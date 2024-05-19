//core
import React from 'react';
//components
import * as S from './styled';

interface IProps {
  title: string;
  path: string;
}

export const LinkPages: React.FC<IProps> = ({ title, path }) => {
  return <S.LinkPages to={path}>{title}</S.LinkPages>;
};
