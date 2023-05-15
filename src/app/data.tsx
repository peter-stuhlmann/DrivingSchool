import { BannerImage, FooterLink, NavElement, TeamMember } from './types';

export const title: string = 'Fahrschule StreetMasters';

export const navElements: NavElement[] = [
  {
    title: 'Start',
    slug: '/#start',
  },
  {
    title: 'Leistungen',
    slug: '/#leistungen',
  },
  {
    title: 'Team',
    slug: '/#team',
  },
  {
    title: 'Kontakt',
    slug: '/#kontakt',
  },
];

export const services: string[] = [
  'Praktische Fahrprüfungsvorbereitung',
  'Theorieunterricht in verschiedenen Sprachen',
  'Begleitetes Fahren mit 17',
  'Intensivkurse für einen schnelleren Führerscheinerwerb',
  'Auffrischungsstunden',
  'Führerscheinantrag Online',
  'Erste-Hilfe-Kurs mit Sehtest',
];

export const team: TeamMember[] = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Geschäftsführer & Fahrlehrer',
    img: '/team-3.jpg',
  },
  {
    name: 'Max Mustermann',
    role: 'Fahrlehrer',
    img: '/team-1.jpg',
  },
  {
    name: 'Anna Müller',
    role: 'Fahrlehrerin',
    img: '/team-2.jpg',
  },
];

export const bannerImages: BannerImage[] = [
  {
    id: 'start',
    imgNameM: '/bmw-medium.jpg',
    imgNameL: '/bmw-large.jpg',
    imgDescription: 'BMW',
    captionOpacity: 0.75,
    captionText: (
      <>
        Foto von <a href="https://unsplash.com/@axmares">Alex Mares</a> auf{' '}
        <a href="https://unsplash.com/de/fotos/xFgL8xGIGpk">Unsplash</a>
      </>
    ),
  },
  {
    imgNameM: '/fahrt-medium.jpg',
    imgNameL: '/fahrt-large.jpg',
    imgDescription: 'Fahrt',
    captionText: (
      <>
        Foto von <a href="https://unsplash.com/@danielcgold">Dan Gold</a> auf{' '}
        <a href="https://unsplash.com/de/fotos/kARZuSYMfrA">Unsplash</a>
      </>
    ),
  },
  {
    imgNameM: '/autobahn-medium.jpg',
    imgNameL: '/autobahn-large.jpg',
    imgDescription: 'Autobahn',
    captionOpacity: 0.75,
    captionText: (
      <>
        Foto von{' '}
        <a href="https://unsplash.com/@vberruezo">Victor Sánchez Berruezo</a>{' '}
        auf <a href="https://unsplash.com/de/fotos/XC_L00hjUww">Unsplash</a>
      </>
    ),
  },
  {
    imgNameM: '/tesla-medium.jpg',
    imgNameL: '/tesla-large.jpg',
    imgDescription: 'Tesla',
    captionText: (
      <>
        Foto von <a href="https://unsplash.com/@martinkatler">Martin Katler</a>{' '}
        auf <a href="https://unsplash.com/de/fotos/WyGUO1k7AEQ">Unsplash</a>
      </>
    ),
  },
];

export const address: string[] = [
  'Musterstraße 8',
  '12345 Musterstadt',
  '',
  '+49 (0) 1234 5678900',
  'kontakt@example.de',
];

export const socialMediaLinks: FooterLink[] = [
  {
    title: 'facebook.com',
    href: 'https://facebook.com',
  },
  {
    title: 'instagram.com',
    href: 'https://instagram.com',
  },
  {
    title: 'twitter.com',
    href: 'https://twitter.com',
  },
  {
    title: 'youtube.com',
    href: 'https://youtube.com',
  },
];

export const openingHours: string[] = [
  'Mo - Fr: 09.00 - 16.00 Uhr',
  'Sa: 10.00 - 14.00 Uhr',
  'So: geschlossen',
];

export const legalLinks: FooterLink[] = [
  {
    title: 'Impressum',
    href: '/impressum',
  },
  {
    title: 'Datenschutzerklärung',
    href: '/datenschutzerklaerung',
  },
];

export const development: FooterLink = {
  title: 'Peter R. Stuhlmann Webentwicklung',
  href: 'https://peter-stuhlmann-webentwicklung.de',
};
