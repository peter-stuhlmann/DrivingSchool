'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';

import { title } from '../data';

export default function LogoComponent(): JSX.Element {
  return (
    <Logo href="/#start">
      <Image
        src={'/logo.png'}
        width={500}
        height={50}
        alt={'Logo'}
        title={`Logo: ${title}`}
      />
    </Logo>
  );
}

const Logo = styled(Link)`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 0 20px 0 0;
    flex: 0 0 calc(100% - 90px);
  }
`;

const Image = styled(NextImage)`
  max-width: 100%;
  height: auto;
`;
