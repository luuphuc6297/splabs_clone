import { Footer, Header, TopHeader } from 'components';
import AboutUs from './AboutUs';
import { EnforceProject } from './Enforce';
import HomePage from './Home';
import { MakeDifferent } from './MakeDif';
import { Partners } from './Partners';
import { TheTeam } from './Team';

const LandingPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <HomePage />
      <AboutUs />
      <EnforceProject />
      <MakeDifferent />
      <TheTeam />
      <Partners />
      <Footer />
    </>
  );
};
export default LandingPage;
