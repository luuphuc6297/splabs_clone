import { Header, TopHeader } from 'components';
import AboutUs from './AboutUs';
import HomePage from './Home';

const LandingPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <HomePage />
      <AboutUs />
    </>
  );
};
export default LandingPage;
