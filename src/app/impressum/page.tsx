'use client';

import { styled } from 'styled-components';
import {
  Container as ContainerStyles,
  H2,
  Note,
  Text as TextStyles,
} from '../components/styles';

export default function LegalNotice(): JSX.Element {
  return (
    <Container>
      <Note>
        Hinweis: Diese Website dient nur als Beispiel/Vorlage und repräsentiert
        keine echte Fahrschule.
      </Note>
      <H2>Impressum</H2>
      <h3>Angaben gemäß § 5 TMG</h3>
      <Text>
        Fahrschule StreetMasters GmbH
        <br />
        Musterstraße 8
        <br />
        12345 Musterstadt
      </Text>

      <h3>Vertreten durch:</h3>
      <Text>Ahmet Yılmaz</Text>

      <h3>Kontakt</h3>
      <Text>
        Telefon: +49 (0) 1234 5678900
        <br />
        E-Mail: <a href="mailto:kontakt@example.de">kontakt@example.de</a>
      </Text>

      <h3>Umsatzsteuer-ID</h3>
      <Text>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        DE999999999
      </Text>

      <h3>EU-Streitschlichtung</h3>
      <Text>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <br />
        <a href="https://ec.europa.eu/consumers/odr/">
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </Text>

      <Text>Unsere E-Mail-Adresse finden Sie oben im Impressum.</Text>

      <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
      <Text>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </Text>
    </Container>
  );
}

const Container = styled(ContainerStyles)`
  padding-top: 100px;

  @media (max-width: 1180px) {
    padding-top: 155px;
  }

  @media (max-width: 480px) {
    padding-top: 58px;
  }
`;

const Text = styled(TextStyles)`
  text-align: left;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
