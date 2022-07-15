import styled from 'styled-components';
import { useState, useLayoutEffect } from 'react';

interface FeatureProps {
  title: string;
  listTitle: string;
  listItems: string[];
}

export default function Feature(props: FeatureProps) {
  const { title, listTitle, listItems } = props;
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useLayoutEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <Container isOpen={isOpen} onClick={handleClick}>
      <FlexRow>
        <Title isOpen={isOpen}>
          <TitleBold isOpen={isOpen}>{title}</TitleBold>
        </Title>
        {isOpen && <Icon>-</Icon>}
        {isOpen || <Icon>+</Icon>}
      </FlexRow>
      <Content isOpen={isOpen}>
        <ListTitle>{listTitle}</ListTitle>
        <ContentList>
          {listItems.map((item: string, index: number) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
        </ContentList>
      </Content>
    </Container>
  );
}

interface isOpenProps {
  isOpen: boolean;
}

const Title = styled.h3<isOpenProps>`
  display: flex;
  align-items: center;
`;

const TitleBold = styled.div<isOpenProps>`
  font-size: 2rem;
  font-weight: bold;
  transition: margin-top 300ms, margin-bottom 300ms, color 300ms;
  margin-bottom: ${(props) => (props.isOpen ? '25px' : '0px')};
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.ul<isOpenProps>`
  transition: opacity 300ms ease-in;
  font-weight: 400;
  line-height: 1.3;
  color: #dad0e6;
  padding-right: 25px;
  overflow: hidden;
  padding-top: ${(props) => (props.isOpen ? '0rem' : '1.5rem')};
  padding-top: 0rem;
  max-height: ${(props) => (props.isOpen ? '1000px' : '0px')};
  list-style-type: disc !important;
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
  background-color: #100817;
  border: 4px solid #47404b;
  transition: border 300ms, background-color 300ms;
  flex: 1;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

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

const ListTitle = styled.h3`
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const ContentList = styled.ul``;

const ListItem = styled.li`
  margin-bottom: 0.25rem;
  display: list-item;
  padding-left: 1.25rem;
  position: relative;
  display: flex;

  &:before {
    content: '';
    display: block;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0.45rem;
  }
`;
