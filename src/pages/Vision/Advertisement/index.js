import { Divider } from '@mui/material';
import { AdvertisementSection, SectionTitle, SectionWrapper } from 'components';
import advertise from './advertisement.json';

export const Advertisement = () => {
    return (
        <SectionWrapper id="vision" sx={{ marginBottom: 21 }}>
            <SectionTitle sx={{ textAlign: 'center', marginBottom: 2 }}>
                SPLABS ADVERTISEMENT
            </SectionTitle>
            <Divider
                sx={{
                    width: '5%',
                    backgroundColor: 'white',
                    margin: '8px auto 56px auto',
                    textAlign: 'center',
                }}
            />
            {advertise.payload.map((item) => (
                <AdvertisementSection
                    id={item.id}
                    adLogo={item.adLogo}
                    caption={item.caption}
                />
            ))}
        </SectionWrapper>
    );
};
