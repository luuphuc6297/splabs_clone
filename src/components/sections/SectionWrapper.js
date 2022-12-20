import { Container } from '@mui/material';

export const SectionWrapper = ({ id, children, ...props }) => {
    return (
        <Container id={id} maxWidth="lg" {...props}>
            {children}
        </Container>
    );
};
