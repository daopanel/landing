import styled from 'styled-components';

interface FeatureProps {
  title: string;
  content: string;
  primaryColor: string;
}

export default function Feature(props: FeatureProps) {
  const { title, content, primaryColor } = props;

  return (
    <Container>
      <Title primaryColor={primaryColor}>{title}</Title>
      <Content>{content}</Content>
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

const Container = styled.div`
  background-color: #100817;
  border: 4px solid #47404b;
  border-radius: 8px;
  padding: 50px;
  padding-right: 25px;
  transition: border 300ms, background-color 300ms;
  flex: 1;
  margin-bottom: 25px;

  &:hover {
    border: 4px solid #5a4d66;
    background-color: #302041;
    ${Title} {
      color: white;
    }
  }

  &:hover > :first-child {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  &:hover > :nth-child(2) {
    opacity: 1;
    visibility: visible;
  }
`;

const Content = styled.p`
  opacity: 1;
  visibility: visible;
  transition: opacity 300ms ease-in;
  font-weight: 400;
  line-height: 1.3;
  color: #dad0e6;
  padding-right: 25px;
`;
