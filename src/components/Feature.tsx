import styled from 'styled-components';
import { useState } from 'react'

interface FeatureProps {
  title: string;
  content: string;
  primaryColor: string;
}

export default function Feature(props: FeatureProps) {
  const { title, content, primaryColor } = props;
  const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
      setIsOpen((isOpen) => !isOpen)
    }
  return (
    <Container onClick ={handleClick}>
      <FlexRow>
        <Title primaryColor={primaryColor}>{title}</Title>
        {isOpen && <Icon>-</Icon> }
        {isOpen || <Icon>+</Icon>}
      </FlexRow>
      {isOpen && <Content>{content}</Content> }
    </Container>
  );
}
interface styleProps {
  primaryColor: string;
}

const Title = styled.h3<styleProps>`
  margin-bottom: 30px;
  margin-top: 0px;
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.primaryColor};
  transition: margin-top 300ms, margin-bottom 300ms, color 300ms;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Content = styled.p`
  transition: opacity 300ms ease-in;
  font-weight: 400;
  line-height: 1.3;
  color: #dad0e6;
  padding-right: 25px;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: #47404b;
`

const Container = styled.div`
  background-color: #100817;
  border-top: 4px solid #47404b;
  border-bottom: 4px solid #47404b;
  border: 4px solid #47404b;
  transition: border 300ms, background-color 300ms;
  flex: 1;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 25px;
  cursor: pointer;

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
