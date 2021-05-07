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
      <Header className="" navBgColor="#4A90E2" transparent contained />
      <Banner src="/images/image1.jpg" title="Space" caption={captionTest}>
        <TrendingTrack title="Trending Today" data={newsTest} />
      </Banner>
    </>
  );
};

export default Home;
