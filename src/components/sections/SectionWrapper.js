import { Container } from '@mui/system';

export const SectionWrapper = ({ id, children, ...props }) => {
  return (
    <Container id={id} maxWidth="lg" {...props}>
      {children}
    </Container>
  );
};
