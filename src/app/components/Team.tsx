'use client';

import Image from 'next/image';
import { styled } from 'styled-components';

import { team } from '../data';
import { TeamMember } from '../types';
import { Container as ContainerStyles, HeadingStyles } from './styles';

export default function TeamComponent(): JSX.Element {
  return (
    <Container id={'team'}>
      <H2>Team</H2>
      {team.map((teamMember: TeamMember) => (
        <div key={teamMember.name}>
          <TeamMemberImage
            src={teamMember.img}
            width={220}
            height={220}
            alt={teamMember.name}
            title={`${teamMember.name} | ${teamMember.role}`}
          />
          <TeamMemberName>{teamMember.name}</TeamMemberName>
          <TeamMemberRole>{teamMember.role}</TeamMemberRole>
        </div>
      ))}
    </Container>
  );
}

const Container = styled(ContainerStyles)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const H2 = styled.h2`
  ${HeadingStyles}
  flex: 0 0 100%;
`;

const TeamMemberImage = styled(Image)`
  border-radius: 50%;
`;

const TeamMemberName = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 20px 0 5px 0;
`;

const TeamMemberRole = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;
