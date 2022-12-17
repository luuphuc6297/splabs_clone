import { Box } from '@mui/system';
import { IconChevronLeftSvg } from 'components/Svgs/IconChevronLeftSvg';
import { IconChevronRightSvg } from 'components/Svgs/IconChevronRightSvg';
import { useMobile } from 'hooks/useMobile';

export const CustomNavigationSwiper = ({ swiperRef }) => {
    const isMobile = useMobile();
    return (
        <Box>
            {!isMobile && (
                <>
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
                </>
            )}
        </Box>
    );
};
