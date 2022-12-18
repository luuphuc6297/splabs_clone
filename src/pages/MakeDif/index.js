import { Box, Grid } from '@mui/material';
import {
    CategoryCard,
    SectionCaption,
    SectionTitle,
    SectionWrapper,
} from 'components';
import { useTablet } from 'hooks/useTablet';
import categories from './categories.json';

export const MakeDifferent = () => {
    const { isTablet } = useTablet();

    return (
        <SectionWrapper
            id="influencer"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 24,
                flexDirection: isTablet ? 'column' : 'initial',
                gap: isTablet ? '32px' : '0',
            }}
        >
            <Box
                sx={{ width: '100%', textAlign: isTablet ? 'center' : 'left' }}
            >
                <SectionTitle>WHAT MAKES</SectionTitle>
                <SectionTitle>US DIFFERENT</SectionTitle>
                <SectionCaption
                    sx={{
                        marginTop: 2,
                        maxWidth: isTablet ? '100%' : 320,
                    }}
                >
                    Exciting results demonstrate some of what our team can do
                    for you!
                </SectionCaption>
            </Box>
            <Box>
                <Grid container columnSpacing={5} rowSpacing={5}>
                    {categories.payload.map(({ id, title, lists, logo }) => (
                        <Grid item xs={12} md={6} key={id}>
                            <CategoryCard
                                title={title}
                                lists={lists}
                                logo={logo}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};
