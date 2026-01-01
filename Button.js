import styled from 'styled-components'

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  border: none;
  min-width: 220px;
  background: #090909;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid black;
  transition: 0.4s background ease-in;

  &:hover {
    background: rgb(88, 47, 47);
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  cursor: pointer;
  border: black 1px solid;

  &:hover {
    background: black;
    color: white;
  }
`;
