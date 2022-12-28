import { visionBackground } from 'assets';
import {
    Footer,
    Header,
    SectionWithBackground,
    SectionWrapperFullWidth,
    TopHeader,
} from 'components';
import useScrollToTarget from 'hooks/useScrollToView';
import { Explore } from '../LandingPage/Explore';
import { Advertisement } from './Advertisement';
import { ServicesAndProcess } from './ServicesAndProcess';
import { TheFullyTeam } from './TheFullyTeam';
import { Vision } from './Visions';

const VisionPage = () => {
    useScrollToTarget();
    return (
        <>
            <SectionWrapperFullWidth
                sx={{
                    width: '100%',
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
                <TheFullyTeam />
                <Advertisement />
            </SectionWithBackground>
            <Explore />
            <Footer />
        </>
    );
};
export default VisionPage;
