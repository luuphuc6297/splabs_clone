import { Footer, Header, TopHeader } from 'components';
import AboutUs from './AboutUs';
import { EnforceProject } from './Enforce';
import { Explore } from './Explore';
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
            <Explore />
            <Footer />
        </>
    );
};
export default LandingPage;
