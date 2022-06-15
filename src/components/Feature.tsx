import styled from 'styled-components';
import { useState } from 'react';

interface FeatureProps {
  title: string;
  content: string;
}

export default function Feature(props: FeatureProps) {
  const { title, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <Container isOpen={isOpen} onClick={handleClick}>
      <FlexRow>
        <Title isOpen={isOpen}>{title}</Title>
        {isOpen && <Icon>-</Icon>}
        {isOpen || <Icon>+</Icon>}
      </FlexRow>
      <Content aria-expanded={!isOpen} isOpen={isOpen}>
        {content}
      </Content>
    </Container>
  );
}

interface isOpenProps {
  isOpen: boolean;
}

const Title = styled.h3<isOpenProps>`
  font-size: 32px;
  font-weight: bold;
  transition: margin-top 300ms, margin-bottom 300ms, color 300ms;
  margin-bottom: ${(props) => props.isOpen ? '25px' : '0px'};
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.p<isOpenProps>`
  transition: opacity 300ms ease-in;
  font-weight: 400;
  line-height: 1.3;
  color: #dad0e6;
  padding-right: 25px;
  overflow: hidden;
  padding-top: ${(props) => (props.isOpen ? '0rem' : '1.5rem')};
  padding-top: 0rem;
  max-height: ${(props) => (props.isOpen ? '1000px' : '0px')};
  transition: ${(props) =>
    props.isOpen
      ? 'max-height 1s ease-in-out'
      : 'max-height 300ms cubic-bezier(0, 1, 0, 1)'};
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: #47404b;
`;

const Container = styled.div<isOpenProps>`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border: 4px solid #47404b;
  transition: border 300ms, background-color 300ms;
  flex: 1;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    border-top: 4px solid #5a4d66;
    border-bottom: 4px solid #5a4d66;
    border: 4px solid #5a4d66;
    background-color: #302041;
  }

  &:hover > ${Content} {
    opacity: 1;
  }
`;
