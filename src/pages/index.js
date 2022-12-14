import { Header, TopHeader } from 'components';
import AboutUs from './AboutUs';
import { EnforeProject } from './Enfore';
import HomePage from './Home';
import { MakeDifferent } from './MakeDif';

const LandingPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <HomePage />
      <AboutUs />
      <EnforeProject />
      <MakeDifferent />
    </>
  );
};
export default LandingPage;
