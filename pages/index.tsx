import Banner from 'components/Banner';
import BasePage from 'components/BasePage';
import CardLarge from 'components/CardLarge';
import CarouselSlider from 'components/CarouselSlider';
import Footer from 'components/Footer';
import Header from 'components/Header';
import TrendingTrack from 'components/TrendingTrack';
import { aboutData, captionTest, carousels, newsTest } from '../fakeData';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <Header transparent contained type="1" />
      <Banner
        src="/images/image1.jpg"
        title={{ primary: 'Space', secondary: '.' }}
        caption={captionTest}
      >
        <TrendingTrack
          className="d-none d-lg-block"
          title="Trending Today"
          data={newsTest}
        />
      </Banner>
      <Header
        className="bg-primary d-none d-md-block"
        contained /* fixScroll */
      />
      <BasePage>
        <CarouselSlider className="pb-2" isPlaying infinite data={carousels} />
        <CardLarge data={aboutData} />
      </BasePage>
      <Footer />
    </div>
  );
};

export default Home;
