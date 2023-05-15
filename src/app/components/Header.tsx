'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { navElements } from '../data';
import { NavElement } from '../types';

import useWindowSize from '../utils/useWindowSize';
import Logo from './Logo';

export default function HeaderComponent(): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);

  const { width } = useWindowSize();

  const router = useRouter();

  const handleLinkClick = (event: any) => {
    event.preventDefault();
    router.push(event.target.href);
    setIsNavOpen(false);
  };

  return (
    <Header>
      {width && width <= 480 && (
        <MenuButton
          $isNavOpen={isNavOpen}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span />
          <span />
          <span />
        </MenuButton>
      )}

      <Logo />

      <Navigation ref={navRef} $isNavOpen={isNavOpen}>
        <ul>
          {navElements.map((elem: NavElement) => (
            <li key={elem.slug}>
              <Link
                href={elem.slug}
                scroll={false}
                onClick={(e) => handleLinkClick(e)}
              >
                {elem.title}
              </Link>
            </li>
          ))}
        </ul>
      </Navigation>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 100px;
  z-index: 1;

  @media (max-width: 1180px) {
    flex-direction: column;
    margin-bottom: 90px;
    height: 125px;
    padding-bottom: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    flex-flow: row wrap;
    margin-bottom: 0;
    height: auto;
    padding-bottom: 0;
  }
`;

const MenuButton = styled.button<{ $isNavOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 20px;

  &:focus {
    outline: none;
  }

  span {
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.2s ease-in-out;

    &:nth-child(1) {
      transform: ${({ $isNavOpen }) =>
        $isNavOpen ? 'translateY(6px) rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $isNavOpen }) => ($isNavOpen ? 0 : 1)};
      transform: ${({ $isNavOpen }) =>
        $isNavOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ $isNavOpen }) =>
        $isNavOpen ? 'translateY(-6px) rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Navigation = styled.nav<{ $isNavOpen: boolean }>`
  position: relative;

  @media (max-width: 1180px) {
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex: 0 0 100%;
    max-height: ${({ $isNavOpen }) => ($isNavOpen ? '300px' : '0')};
    transition: max-height 0.2s ease-in-out;
    overflow: hidden;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
    margin-top: 0;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (max-width: 480px) {
      flex-direction: column;
      width: calc(100% - 40px);
      margin: 0 auto;
    }

    li {
      @media (max-width: 480px) {
        border-bottom: 1px solid #c5c5c5;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
      }

      &:last-child {
        @media (max-width: 480px) {
          border-bottom: none;
          margin-bottom: 10px;
        }
      }

      a {
        padding: 15px 30px;
        text-decoration: none;
        color: #000;
        text-transform: uppercase;
        font-size: 14px;
        position: relative;
        white-space: nowrap;

        @media (max-width: 768px) {
          padding: 15px 20px;
        }

        @media (max-width: 480px) {
          padding: 15px 15px 15px 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        &::after {
          content: '';
          height: 1px;
          background-color: #0f232e;
          position: absolute;
          bottom: 10px;
          left: 30px;
          width: 0;
          transition: 0.2s;

          @media (max-width: 768px) {
            left: 20px;
          }

          @media (max-width: 480px) {
            display: none;
          }
        }

        &:hover::after {
          width: calc(100% - 60px);

          @media (max-width: 768px) {
            width: calc(100% - 40px);
          }
        }
      }
    }
  }
`;
