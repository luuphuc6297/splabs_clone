import { homeBackground, secondBackground } from 'assets';
import {
    Footer,
    Header,
    SectionWrapperFullWidth,
    TopHeader
} from 'components';
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
            <SectionWrapperFullWidth
                sx={{
                    backgroundImage: `url(${secondBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                }}
            >
                <AboutUs />
                <EnforceProject />
                <MakeDifferent />
            </SectionWrapperFullWidth>
            <SectionWrapperFullWidth
                sx={{
                    backgroundImage: `url(${secondBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                }}
            >
                <TheTeam />
                <Project />
                <Partners />
                <StartGrowing />
            </SectionWrapperFullWidth>
            <Explore />
            <Footer />
        </>
    );
};
export default LandingPage;
