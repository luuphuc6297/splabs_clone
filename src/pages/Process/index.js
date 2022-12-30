import { processBackground } from 'assets';
import {
    Footer,
    Header,
    SectionWithBackground,
    SectionWrapperFullWidth,
    TopHeader,
} from 'components';
import { Explore } from '../LandingPage/Explore';
import { Business } from './Business';
import { InfluencerMarketing } from './InfluencerMarketing';
import { InfluencerProcess } from './InfluencerProcess';
import { Offers } from './Offers';
import useScrollToTarget from 'hooks/useScrollToView';

const ProcessPage = () => {
    useScrollToTarget();
    return (
        <>
            <SectionWrapperFullWidth
                sx={{
                    backgroundImage: `url(${processBackground})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    objectFit: 'cover',
                    height: '90vh',
                }}
            >
                <TopHeader />
                <Header />
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
