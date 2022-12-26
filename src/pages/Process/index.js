import { homeBackground } from 'assets';
import {
    Footer,
    SectionWithBackground,
    SectionWrapperFullWidth
} from 'components';
import { Explore } from '../LandingPage/Explore';
import { Business } from './Business';
import { InfluencerMarketing } from './InfluencerMarketing';
import { InfluencerProcess } from './InfluencerProcess';
import { Offers } from './Offers';

const ProcessPage = () => {
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
                <div>hihi</div>
            </SectionWrapperFullWidth>
            <SectionWithBackground>
                <InfluencerProcess />
                <Business />
                <InfluencerMarketing />
                <Offers />
            </SectionWithBackground>
            <Explore />
            <Footer />
        </>
    );
};
export default ProcessPage;
