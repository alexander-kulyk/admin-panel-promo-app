import styled from 'styled-components';

export const WrapperForm = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const Label = styled.label`
  font-family: Quicksand;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.01em;
  text-decoration: none;
  color: black;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 30px;
  border: 1px solid rgb(191, 190, 190);
  border-radius: 10px;
  padding-left: 20px;
`;

export const Textarea = styled.textarea``;

export const Button = styled.button`
  font-family: Quicksand;
  height: 30px;
  width: 100px;
  margin-top: 5px;
  color: white;
  background-color: rgb(4, 120, 128);
  border: 0.5px solid rgb(216, 214, 214);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(3 100 106);
  }
`;
