import { visionBackground } from 'assets';
import {
    Footer,
    Header,
    SectionWithBackground,
    SectionWrapperFullWidth,
    TopHeader
} from 'components';
import { Explore } from '../LandingPage/Explore';
import { ServicesAndProcess } from './ServicesAndProcess';
import { TheOurTeam } from './TheFullyTeam/TheOurTeam';
import { Vision } from './Visions';

const VisionPage = () => {
    return (
        <>
            <SectionWrapperFullWidth
                sx={{
                    backgroundImage: `url(${visionBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                    height: '100vh',
                }}
            >
                <TopHeader />
                <Header />
            </SectionWrapperFullWidth>
            <SectionWithBackground>
                <Vision />
                <ServicesAndProcess />
                <TheOurTeam />
            </SectionWithBackground>
            <Explore />
            <Footer />
        </>
    );
};
export default VisionPage;
