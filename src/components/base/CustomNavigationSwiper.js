import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IconChevronLeftSvg } from 'components/Svgs/IconChevronLeftSvg';
import { IconChevronRightSvg } from 'components/Svgs/IconChevronRightSvg';

export const CustomNavigationSwiper = ({ swiperRef }) => {
    const matches = useMediaQuery('(min-width:1300px)');

    return (
        <>
            {matches && (
                <Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '-50px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconChevronLeftSvg
                            onClick={() => swiperRef.current.slideNext()}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: '-50px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconChevronRightSvg
                            onClick={() => swiperRef.current.slideNext()}
                        />
                    </Box>
                </Box>
            )}
        </>
    );
};
