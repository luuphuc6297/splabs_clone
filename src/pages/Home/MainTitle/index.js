import { HomeTitle, SectionCaption } from 'components';

export const MainTitle = () => {
    return (
        <>
            <HomeTitle
                sx={{
                    marginBottom: 1,
                    animation: 'type 4s steps(40)',
                    animationFillMode: 'forwards',
                }}
            >
                Welcome to SPLabs!
            </HomeTitle>
            <SectionCaption sx={{ marginBottom: 2 }}>
                We empower founder to build, fund, and scale in the Web3 world
                for ambitious start up
            </SectionCaption>
        </>
    );
};
