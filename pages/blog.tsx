import BaseLayout from 'components/BaseLayout';
import BasePage from 'components/BasePage';
import CardLarge from 'components/CardLarge';
import Footer from 'components/Footer';
import { aboutData } from '../fakeData';

const Blog = () => {
  return (
    <BaseLayout>
      <BasePage title="Blog">
        <CardLarge data={aboutData} />
      </BasePage>
      <Footer />
    </BaseLayout>
  );
};

export default Blog;
