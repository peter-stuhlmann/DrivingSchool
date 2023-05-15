'use client';

import BannerImageComponent from './components/Banner';
import ContactComponent from './components/Contact';
import ServicesComponent from './components/Services';
import TeamComponent from './components/Team';

import { bannerImages } from './data';

export default function Home(): JSX.Element {
  return (
    <main>
      <BannerImageComponent
        id={bannerImages[0].id}
        imgNameM={bannerImages[0].imgNameM}
        imgNameL={bannerImages[0].imgNameL}
        imgDescription={bannerImages[0].imgDescription}
        captionOpacity={bannerImages[0].captionOpacity}
        captionText={bannerImages[0].captionText}
        priority
      />
      <ServicesComponent />
      <BannerImageComponent
        imgNameM={bannerImages[1].imgNameM}
        imgNameL={bannerImages[1].imgNameL}
        imgDescription={bannerImages[1].imgDescription}
        captionText={bannerImages[1].captionText}
      />
      <TeamComponent />
      <BannerImageComponent
        imgNameM={bannerImages[2].imgNameM}
        imgNameL={bannerImages[2].imgNameL}
        imgDescription={bannerImages[2].imgDescription}
        captionText={bannerImages[2].captionText}
      />
      <ContactComponent />
      <BannerImageComponent
        imgNameM={bannerImages[3].imgNameM}
        imgNameL={bannerImages[3].imgNameL}
        imgDescription={bannerImages[3].imgDescription}
        captionText={bannerImages[3].captionText}
      />
    </main>
  );
}
