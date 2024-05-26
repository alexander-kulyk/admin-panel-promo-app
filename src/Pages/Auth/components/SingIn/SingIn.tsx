//core
import React from 'react';
import { useDispatch } from 'react-redux';
//components
import { Form } from '../Form';
//other
import { IAuthData } from '../../../../types/common';
import { loginUser } from '../../../../store/auth/thunks';

export const SingIn: React.FC = () => {
  const dispatch = useDispatch();
  const handleSubmitAuthForm = (data: IAuthData) => {
    //dispatch(loginUser(data));
  };
  return <Form handleSubmitAuthForm={handleSubmitAuthForm} />;
};
