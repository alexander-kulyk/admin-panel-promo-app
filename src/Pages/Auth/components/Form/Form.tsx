//core
import React from 'react';
import { useForm } from 'react-hook-form';
//components
import * as S from './styled';

interface IAuthFormData {
  login: string;
  email: string;
}

interface IProps {
  handleSubmitAuthForm: (data: IAuthFormData) => void;
}

export const Form: React.FC<IProps> = ({ handleSubmitAuthForm }) => {
  const { register, handleSubmit } = useForm<IAuthFormData>();

  return (
    <S.WrapperForm>
      <S.Form onSubmit={handleSubmit((data) => handleSubmitAuthForm(data))}>
        <S.InputWrapper>
          <S.Label>Login</S.Label>
          <S.Input {...register('login')} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>Email</S.Label>
          <S.Input {...register('email')} />
        </S.InputWrapper>
        <S.Button type='submit'>Submit</S.Button>
      </S.Form>
    </S.WrapperForm>
  );
};
