'use client';

import Link from 'next/link';
import styled from 'styled-components';

import {
  address,
  development,
  legalLinks,
  openingHours,
  socialMediaLinks,
  title,
} from '../data';

import { FooterLink } from '../types';

import useWindowSize from '../utils/useWindowSize';

const MOBILE_WIDTH: number = 480;
const TABLET_WIDTH: number = 768;

export default function Footer(): JSX.Element {
  const { width } = useWindowSize();

  return (
    <FooterContainer>
      <div>
        <Block>
          <strong>{title}</strong>
          {address.map((line: string) => (
            <div key={line}>{line}</div>
          ))}
        </Block>
        <Block>
          <strong>Social Media</strong>
          {socialMediaLinks.map((link: FooterLink) => (
            <Link key={link.href} href={link.href} target="_blank">
              {link.title}
            </Link>
          ))}
        </Block>
        <Block>
          <strong>Bürozeiten</strong>
          {openingHours.map((line: string) => (
            <div key={line}>{line}</div>
          ))}
        </Block>
        <Block>
          <strong>Rechtliches</strong>
          {legalLinks.map((link: FooterLink) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.title}
            </Link>
          ))}
          {width && width <= MOBILE_WIDTH ? (
            <>
              <br />
              <br />
            </>
          ) : (
            <br />
          )}
          <strong>Design und Programmierung</strong>
          <br />
          <Link key={development.href} href={development.href} target="_blank">
            {development.title}
          </Link>
        </Block>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  & > div {
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    margin: 30px auto 20px auto;

    @media (max-width: ${TABLET_WIDTH}px) {
      flex-flow: row wrap;
    }
  }
`;

const Block = styled.div`
  padding: 20px;
  font-size: 14px;

  @media (max-width: ${TABLET_WIDTH}px) {
    flex: 0 0 calc(50% - 2 * 20px);
  }

  @media (max-width: ${MOBILE_WIDTH}px) {
    flex: 0 0 calc(100% - 2 * 20px);
  }

  div {
    min-height: 17px;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
    color: #000;
    display: block;
  }
`;
