import Link from 'next/link'
import styled from 'styled-components'
import mirrorPurple from '../../public/assets/images/MirrorPurple.png';
import Github from 'components/Github';
import Twitter from 'components/Twitter';
import Discord from 'components/Discord';


interface Props {
  primaryColor: string;
}

export default function SocialIcons(props: Props) {
  const {primaryColor} = props

  return (
    <Ul primaryColor={primaryColor}>
      <Link passHref href="https://github.com/daopanel">
        <a target="_blank" rel="noreferrer">
          <Github />
        </a>
      </Link>
      <Link passHref href="https://discord.gg/5N3wpzNjTT">
        <a target="_blank" rel="noreferrer">
          <Discord />
        </a>
      </Link>
      <Link passHref href="https://twitter.com/daopanel">
        <a target="_blank" rel="noreferrer">
          <Twitter />
        </a>
      </Link>
      <Link passHref href="https://mirror.xyz/0xdaopanel.eth">
        <a target="_blank" rel="noreferrer">
          <Mirror />
        </a>
      </Link>
    </Ul>
  );
}

const Ul = styled.ul<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    padding: 0px 25px;
  }

  > * {
    margin: 10px;
    cursor: pointer;
  }

  > * > * > * {
    fill: ${(props) => props.primaryColor};
  }
`;

const Mirror = styled.div`
  background-image: url(${mirrorPurple.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 25px;
  width: 25px;
`;