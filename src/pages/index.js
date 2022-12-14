import { Header, TopHeader } from 'components';
import AboutUs from './AboutUs';
import HomePage from './Home';
import { EnforeProject } from './Enfore';
const LandingPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <HomePage />
      <AboutUs />
      <EnforeProject />
    </>
  );
};
export default LandingPage;
