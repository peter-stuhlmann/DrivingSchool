import { css, styled } from 'styled-components';

export const Container = styled.section`
  max-width: 1170px;
  margin: 0 auto;
  padding: 80px 20px 20px 20px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 1180px) {
    padding-top: 120px;
  }

  @media (max-width: 480px) {
    padding-top: 35px;
  }
`;

export const HeadingStyles = css`
  text-align: center;
  color: #eb0000;
  margin: 70px 0 50px 0;
`;

export const H2 = styled.h2`
  ${HeadingStyles}
`;

export const Text = styled.p`
  text-align: center;
  line-height: 1.7;
  margin: 0 0 20px 0;
`;

export const Note = styled.p`
  color: #eb0000;
`;
