'use client';

import Image from 'next/image';
import { styled } from 'styled-components';
import useWindowSize from '../utils/useWindowSize';

export default function BannerImageComponent({
  id,
  imgNameM,
  imgNameL,
  imgDescription,
  captionText,
  captionOpacity,
  priority,
}: {
  id?: string;
  imgNameM: string;
  imgNameL: string;
  imgDescription: string;
  captionText: JSX.Element;
  captionOpacity?: number;
  priority?: boolean;
}): JSX.Element {
  const { width } = useWindowSize();

  const ASPECT_RATIO: number = width && width > 480 ? 3.5 : 1.78;

  return (
    <Container id={id}>
      {width && (
        <Image
          src={width > 480 ? imgNameL : imgNameM}
          width={width}
          height={width / ASPECT_RATIO}
          alt={imgDescription}
          title={imgDescription}
          priority={priority}
        />
      )}
      <Caption $captionOpacity={captionOpacity}>{captionText}</Caption>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 100px;
  overflow: hidden;

  @media (max-width: 1180px) {
    padding-top: 155px;
  }

  @media (max-width: 480px) {
    padding-top: 58px;
  }
`;

const Caption = styled.div<{ $captionOpacity: number | undefined }>`
  color: #fff;
  opacity: ${(p) => (p.$captionOpacity ? p.$captionOpacity : 0.4)};
  font-size: 0.7em;
  padding: 0 4px;
  margin-top: -20px;
  text-align: right;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
