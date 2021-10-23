import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import CardLarge from 'components/CardLarge';
import Footer from 'components/Footer';
import { aboutData } from '../fakeData';

const About = () => {
  return (
    <BaseLayout>
      <BasePage title="About">
        <CardLarge data={aboutData} />
      </BasePage>
      <Footer />
    </BaseLayout>
  );
};

export default About;
