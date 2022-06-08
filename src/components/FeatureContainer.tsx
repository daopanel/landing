import Feature from './Feature';
import styled from 'styled-components';

interface FeatureContainerProps {
  primaryColor: string;
}

export default function FeatureContainer(props: FeatureContainerProps) {
  const { primaryColor } = props;

  return (
    <Container>
      <div></div>
      <Feature
        primaryColor={primaryColor}
        title="Off-chain Voting"
        content="Expensive on-chain actions lead to DAOs holding off-chain or layer 2 proposal votes. Drafting proposals, inviting delegate comments, and vote commitment will be all be supported on daopanel."></Feature>
      <Feature
        primaryColor={primaryColor}
        title="Delegate Profiles"
        content="A public profile for DAO delegates to share their ideals and invite members’ trust, based on their own bio and on/off-chain voting history. Other features include direct messaging and polling with those delegating to you, and showing all DAO memberships and NFTs."></Feature>
      <Feature
        primaryColor={primaryColor}
        title="Member Discussions"
        content="The core of DAO governance is rational discourse on what the DAO cares about. Token-gated chat rooms and messaging are a start, and daopanel will experiment with delegate comm systems to best help the DAO survive contentious votes in a public, fair way. "></Feature>
      <Feature
        primaryColor={primaryColor}
        title="Priority Updates"
        content="In a future with hundreds of DAOs each with some marginal benefit for a member, current discussion/gov platforms have a problem with red notification spam and noise. daopanel will have a customizable feed of updates for votes, events, and comments from specific users."></Feature>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1000px;
`;
