import { Footer, Header, TopHeader } from 'components';
import AboutUs from './AboutUs';
import { EnforceProject } from './Enforce';
import { Explore } from './Explore';
import HomePage from './Home';
import { MakeDifferent } from './MakeDif';
import { Partners } from './Partners';
import { TheTeam } from './Team';
import { StartGrowing } from './StartGrowing';

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
            <StartGrowing />
            <Explore />
            <Footer />
        </>
    );
};
export default LandingPage;
