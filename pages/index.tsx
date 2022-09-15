import { Container } from '@mantine/core';
import OverviewBanner from '../components/OverviewBanner/OverviewBanner';
import HideSection from '../components/HideSection/HideSection';

export default function HomePage() {
  return (
    <>
      <Container size="lg" style={{ textAlign: 'center' }}>
        <OverviewBanner />
      </Container>
      <Container size="lg" style={{ textAlign: 'center' }}>
        <video width="80%" height="80%" controls>
          <source src="HideNSeek-Demo.mkv" type="video/mp4" />
          <source src="HideNSeek-Demo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Container>
      <HideSection />
    </>
  );
}
