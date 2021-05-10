import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import CardLarge from 'components/CardLarge';
import Footer from 'components/Footer';
import { aboutData } from '../fakeData';

const Popular = () => {
  return (
    <BaseLayout>
      <BasePage title="Popular">
        <CardLarge data={aboutData} />
      </BasePage>
      <Footer />
    </BaseLayout>
  );
};

export default Popular;
