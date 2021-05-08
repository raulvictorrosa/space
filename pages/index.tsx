import Banner from 'components/Banner';
import CarouselSlider from 'components/CarouselSlider';
import Header from 'components/Header';
import TrendingTrack from 'components/TrendingTrack';
import { captionTest, carousels, newsTest } from '../fakeData';

const Home = () => {
  return (
    <>
      <Header transparent contained type="1" />
      <Banner src="/images/image1.jpg" title="Space" caption={captionTest}>
        <TrendingTrack title="Trending Today" data={newsTest} />
      </Banner>
      <Header className="bg-primary" contained /* fixScroll */ />
      <div style={{ paddingTop: '125px', backgroundColor: '#F2F2F2' }}>
        <CarouselSlider isPlaying infinite data={carousels} />
      </div>
    </>
  );
};

export default Home;
