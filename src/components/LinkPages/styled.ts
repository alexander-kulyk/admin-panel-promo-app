import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkPages = styled(NavLink)`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Quicksand;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  letter-spacing: 0.01em;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  &.active {
    cursor: default;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
`;
