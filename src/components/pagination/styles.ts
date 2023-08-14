import styled from "styled-components";

export const ButtonBox = styled.div`
  gap: 30px;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  border: 1px solid #d6ccc2;
  border-radius: 10px;
  height: 50px;
  width: 50px;

  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;

  &:hover {
    background: #f6f6f7;
    outline: 1px solid transparent;
  }
`;
