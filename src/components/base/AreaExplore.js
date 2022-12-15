import { Box, CardActionArea, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { SectionWrapper, SectionWrapperFullWidth } from 'components';

export const AreaExplore = () => {
  return (
    <SectionWrapperFullWidth sx={{ background: '#284561' }}>
      <SectionWrapper sx={{ padding: '36px 0px' }}>
        <Typography align="center" color="#ffffff" variant="h5" gutterBottom>
          Ready to explore Web3 with us?
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 6.25,
            marginTop: 3.25,
            marginBottom: 3.25,
          }}
        >
          <Box>
            <CardActionArea component="div" disableRipple disableTouchRipple>
              <CardMedia
                component="img"
                height="110"
                image="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ padding: '0px 4px', marginTop: 1.25 }}>
                <Typography
                  color="white"
                  gutterBottom
                  variant="subtitle1"
                  component="span"
                >
                  Email Address
                </Typography>
              </CardContent>
            </CardActionArea>
          </Box>

          <Box>
            <CardActionArea component="div" disableRipple disableTouchRipple>
              <CardMedia
                component="img"
                height="110"
                image="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
                alt="green iguana"
              />
              <CardContent sx={{ padding: '0px 4px', marginTop: 1.25 }}>
                <Typography
                  color="#ffffff"
                  gutterBottom
                  variant="subtitle1"
                  component="span"
                >
                  Email Address
                </Typography>
              </CardContent>
            </CardActionArea>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 6.25,
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #ffffff',
              borderRadius: 4,
            }}
          >
            <Typography
              color="#ffffff"
              gutterBottom
              variant="subtitle1"
              component="span"
              sx={{ fontWeight: 600 }}
            >
              VietNam Office
            </Typography>
            <Typography
              color="#ffffff"
              gutterBottom
              variant="subtitle2"
              component="span"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standa.
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #ffffff',
              borderRadius: 4,
            }}
          >
            <Typography
              color="#ffffff"
              gutterBottom
              variant="subtitle1"
              component="span"
              sx={{ fontWeight: 600 }}
            >
              VietNam Office
            </Typography>
            <Typography
              color="#ffffff"
              gutterBottom
              variant="subtitle2"
              component="span"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standa.
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #ffffff',
              borderRadius: 4,
            }}
          >
            <Typography
              color="#ffffff"
              gutterBottom
              variant="subtitle1"
              component="span"
              sx={{ fontWeight: 600 }}
            >
              VietNam Office
            </Typography>
            <Typography
              color="#ffffff"
              gutterBottom
              variant="subtitle2"
              component="span"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standa.
            </Typography>
          </CardContent>
        </Box>
      </SectionWrapper>
    </SectionWrapperFullWidth>
  );
};
