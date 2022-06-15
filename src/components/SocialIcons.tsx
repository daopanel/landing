import Link from 'next/link';
import styled from 'styled-components';
import mirrorPurple from '../../public/assets/images/MirrorPurple.png';
import GithubSvg from 'components/GithubSvg';
import Twitter from 'components/Twitter';
import Discord from 'components/Discord';

export default function SocialIcons() {

  return (
    <Ul>
      <Link passHref href="https://github.com/daopanel">
        <SocialLink target="_blank" rel="noreferrer">
          <GithubSvg/>
        </SocialLink>
      </Link>
      <Link passHref href="https://discord.gg/5N3wpzNjTT">
        <SocialLink target="_blank" rel="noreferrer">
          <Discord/>
        </SocialLink>
      </Link>
      <Link passHref href="https://twitter.com/daopanel">
        <SocialLink target="_blank" rel="noreferrer">
          <Twitter/>
        </SocialLink>
      </Link>
      <Link passHref href="https://mirror.xyz/0xdaopanel.eth">
        <SocialLink target="_blank" rel="noreferrer">
          <Mirror/>
        </SocialLink>
      </Link>
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    padding: 0px 25px;
  }
`;

const SocialLink = styled.a`
  margin: 10px;
  cursor: pointer;
`;

const Mirror = styled.div`
  background-image: url(${mirrorPurple.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 25px;
  width: 25px;
`;
