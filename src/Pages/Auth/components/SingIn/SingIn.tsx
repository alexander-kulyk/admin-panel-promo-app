//core
import React from 'react';
//Component
import { Form } from '../Form';

export const SingIn: React.FC = () => {
  const handleSubmitAuthForm = (data: any) => {
    console.log('data', data);
  };
  return <Form handleSubmitAuthForm={handleSubmitAuthForm} />;
};
