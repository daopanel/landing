import React from 'react';
import styled, { Interpolation } from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: () => unknown;
  as?: string | React.ComponentType<any>;
  style?: Interpolation<React.CSSProperties>;
}

const LaunchButton = ({ text, style, as, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonElem onClick={() => onClick()} as={as} style={style}>
        { text }
      </ButtonElem>
    </>
  );
};

const ButtonElem = styled.button<ButtonProps>`
  ${({ style }) => style };
  background-color: #5A46C6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  letter-spacing: .1em;
  position: fixed;
  bottom: 80px;
  right: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  padding: 8px 12px;
  border: 1px solid rgba(55, 41, 125, 0.5);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export default LaunchButton;