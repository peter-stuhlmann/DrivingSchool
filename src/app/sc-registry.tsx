'use client';

import React, { useState, useEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet } from 'styled-components';
import Loading from './components/Loading';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet, setStyledComponentsStyleSheet] =
    useState<ServerStyleSheet | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useServerInsertedHTML(() => {
    if (styledComponentsStyleSheet) {
      const styles = styledComponentsStyleSheet.getStyleElement();
      styledComponentsStyleSheet.instance.clearTag();
      return <>{styles}</>;
    }
    return null;
  });

  useEffect(() => {
    const loadStyleSheet = async () => {
      const sheet = new ServerStyleSheet();
      setStyledComponentsStyleSheet(sheet);
      setIsLoading(false);
    };

    loadStyleSheet();
  }, []);

  if (typeof window !== 'undefined' && !isLoading) {
    return <>{children}</>;
  }

  return <Loading />;
}
