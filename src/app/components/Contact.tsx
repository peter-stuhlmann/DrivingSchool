'use client';

import { Container, H2, Text } from './styles';

export default function ContactComponent(): JSX.Element {
  return (
    <Container id={'kontakt'}>
      <H2>Kontakt</H2>
      <Text>
        Nimm jetzt Kontakt mit uns auf, um weitere Informationen zu bekommen und
        eine persönliche Beratung zu vereinbaren. Unser engagiertes Team steht
        dir gerne zur Verfügung.
      </Text>
      <Text>
        <strong>Ruf uns jetzt an: +49 (0) 1234 5678900</strong>
      </Text>
    </Container>
  );
}
