//core
import React from 'react';
import { useForm } from 'react-hook-form';
//components
import * as S from './styled';
//other
import { IAuthData } from '../../../../types/common';

interface IProps {
  handleSubmitAuthForm: (data: IAuthData) => void;
}

export const Form: React.FC<IProps> = ({ handleSubmitAuthForm }) => {
  const { register, handleSubmit } = useForm<IAuthData>();

  return (
    <S.WrapperForm>
      <S.Form onSubmit={handleSubmit((data) => handleSubmitAuthForm(data))}>
        <S.InputWrapper>
          <S.Label>Email</S.Label>
          <S.Input {...register('email')} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Password</S.Label>
          <S.Input {...register('password')} />
        </S.InputWrapper>
        <S.Button type='submit'>Submit</S.Button>
      </S.Form>
    </S.WrapperForm>
  );
};
