import { Footer, Header, SectionWrapperFullWidth, TopHeader } from 'components';
import AboutUs from './AboutUs';
import { EnforceProject } from './Enforce';
import { Explore } from './Explore';
import HomePage from './Home';
import { MakeDifferent } from './MakeDif';
import { Partners } from './Partners';
import { StartGrowing } from './StartGrowing';
import { TheTeam } from './Team';

const LandingPage = () => {
    return (
        <>
            <SectionWrapperFullWidth
                sx={{
                    backgroundImage: `url('/images/background/landing_background.png')`,
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
                    background: 'black',
                }}
            >
                <AboutUs />
                <EnforceProject />
                <MakeDifferent />
            </SectionWrapperFullWidth>
            <TheTeam />
            <Partners />
            <StartGrowing />
            <Explore />
            <Footer />
        </>
    );
};
export default LandingPage;
