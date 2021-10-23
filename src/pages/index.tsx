import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import CardLarge from 'components/CardLarge';
import CarouselSlider from 'components/CarouselSlider';
import Footer from 'components/Footer';
import { aboutData, carousels } from '../fakeData';

const Home = () => {
  return (
    <BaseLayout indexPage>
      <BasePage indexPage>
        <CarouselSlider className="pb-2" isPlaying infinite data={carousels} />
        <CardLarge data={aboutData} />
      </BasePage>
      <Footer />
    </BaseLayout>
  );
};

export default Home;
