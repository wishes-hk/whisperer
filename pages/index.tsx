import { Container } from '@mantine/core';
import OverviewBanner from '../components/OverviewBanner/OverviewBanner';
import { FooterWrapper } from '../components/FooterWrapper/FooterWrapper';
import Hide from '../components/Hide/Hide';
import { CookieBanner } from '../components/CookieBanner/CookieBanner';
import Seek from '../components/Seek/Seek';

export default function HomePage() {
  const footerLinks = [
    {
      title: 'Direct Access', links: [{ link: '', label: 'Wishes Home' }, { link: '', label: 'HideNSeek' }],
    },
    {
      title: 'Contact Us',
      links: [
        { link: 'https://kcwong395.github.io/', label: 'Team Members' },
        { link: 'mailto:wisheshk.official@gmail.com', label: 'Project Collaboration' },
        { link: '', label: 'Technical Support' },
        { link: 'https://github.com/wishes-hk', label: 'Wishes Github' },
      ],
    },
  ];

  return (
    <>
      <Container size="lg" style={{ textAlign: 'center' }}>
        <OverviewBanner />
        <Hide />
        <Seek />
      </Container>
      <CookieBanner />
      <FooterWrapper data={footerLinks} />
    </>
  );
}
