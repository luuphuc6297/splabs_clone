import { homeBackground } from 'assets';
import {
    Footer,
    Header,
    SectionWithBackground,
    SectionWrapperFullWidth,
    TopHeader,
} from 'components';
import useScrollToTarget from 'hooks/useScrollToView';
import AboutUs from './AboutUs';
import { EnforceProject } from './Enforce';
import { Explore } from './Explore';
import HomePage from './Home';
import { MakeDifferent } from './MakeDif';
import { Partners } from './Partners';
import { Project } from './Project';
import { StartGrowing } from './StartGrowing';
import { TheTeam } from './Team';

const LandingPage = () => {
    useScrollToTarget();
    return (
        <>
            <SectionWrapperFullWidth
                sx={{
                    backgroundImage: `url(${homeBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                    height: '100vh',
                }}
            >
                <TopHeader />
                <Header />
                <HomePage />
            </SectionWrapperFullWidth>
            <SectionWithBackground>
                <AboutUs />
                <EnforceProject />
                <MakeDifferent />
            </SectionWithBackground>
            <SectionWithBackground>
                <TheTeam />
                <Project />
                <Partners />
                <StartGrowing />
            </SectionWithBackground>
            <Explore />
            <Footer />
        </>
    );
};
export default LandingPage;
