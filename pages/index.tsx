import Banner from 'components/Banner';
import Header from 'components/Header';
import TrendingTrack from 'components/TrendingTrack';

const captionTest =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie elit at lacus…';
const newsTest = [
  {
    id: 'test1',
    title:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.'
  },
  {
    id: 'test2',
    title:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.'
  },
  {
    id: 'test3',
    title:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.'
  }
];

const Home = () => {
  return (
    <>
      <Header transparent contained type="1" />
      <Banner src="/images/image1.jpg" title="Space" caption={captionTest}>
        <TrendingTrack title="Trending Today" data={newsTest} />
      </Banner>
      <Header className="bg-primary" contained />
    </>
  );
};

export default Home;
