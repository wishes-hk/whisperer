import { ReactElement } from 'react';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper';
import { FooterWrapper } from '../FooterWrapper/FooterWrapper';
import { CookieBanner } from '../CookieBanner/CookieBanner';
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton';

interface LayoutProps {
  children: ReactElement<any, any>
}

export default function Layout({ children }: LayoutProps) {
  const headerLinks = [
    {
      link: '/', label: 'Overview',
    },
    {
      link: '/hide', label: 'Hide',
    },
    {
      link: '/seek', label: 'Seek',
    },
  ];

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
      <HeaderWrapper links={headerLinks} />
      <main>{children}</main>
      <ScrollTopButton />
      <CookieBanner />
      <FooterWrapper data={footerLinks} />
    </>
  );
}
