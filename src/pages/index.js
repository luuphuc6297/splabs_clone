import { Header, TopHeader } from 'components';
import { AreaExplore } from 'components/base/AreaExplore';
import { Footer } from 'components/base/Footer';
import AboutUs from './AboutUs';
import { EnforceProject } from './Enforce';
import HomePage from './Home';
import { MakeDifferent } from './MakeDif';
import { TheTeam } from './Team';

const LandingPage = () => {
  return (
    <>
      {/* <TopHeader />
      <Header />
      <HomePage />
      <AboutUs />
      <EnforceProject />
      <MakeDifferent /> */}
      <TheTeam />
      {/* <AreaExplore />
      <Footer /> */}
    </>
  );
};
export default LandingPage;
