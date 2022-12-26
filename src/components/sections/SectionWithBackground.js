import { secondBackground } from 'assets';
import { SectionWrapperFullWidth } from 'components';

export const SectionWithBackground = ({ children }) => {
    return (
        <SectionWrapperFullWidth
            sx={{
                backgroundImage: `url(${secondBackground})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                objectFit: 'cover',
            }}
        >
            {children}
        </SectionWrapperFullWidth>
    );
};
