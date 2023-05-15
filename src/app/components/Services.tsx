'use client';

import { Container, H2, Text } from './styles';
import { services } from '../data';
import { styled } from 'styled-components';

export default function ServicesComponent(): JSX.Element {
  return (
    <Container id={'leistungen'}>
      <H2>Leistungen</H2>
      <Text>
        Unsere erfahrenen Fahrlehrer:innen bieten Dir eine qualitativ
        hochwertige Ausbildung für Deinen Führerscheinerwerb. Wir unterstützen
        Dich in verschiedenen Bereichen, darunter:
      </Text>
      <List>
        {services.map((service: string) => (
          <li key={service}>{service}</li>
        ))}
      </List>
    </Container>
  );
}

const List = styled.ul`
  color: #0f232e;
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;

  li {
    margin: 15px 0;
  }
`;
