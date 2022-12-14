import { Box, List, ListItem } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import { SectionTitle, SectionWrapper } from 'components';
import { SPLabsLogo } from 'assets';
import FacebookIcon from '@mui/icons-material/Facebook';
import { SectionWrapperFullWidth } from 'components/sections/SectionWrapperFullWidth';

export const Footer = () => {
  return (
    <SectionWrapperFullWidth sx={{ background: '#262626' }}>
      <SectionWrapper sx={{ background: '#262626', display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 5.5,
            width: '100%',
            paddingTop: 6.25,
            paddingBottom: 6.25,
          }}
        >
          <Box sx={{ flex: '1' }}>
            <Box
              sx={{
                display: 'flex',
                marginBottom: 3.25,
                img: {
                  height: 19,
                },
              }}
            >
              <img loading="lazy" alt="SPLabsLogo" src={SPLabsLogo} />
            </Box>
            <Box sx={{ marginBottom: 2.25, marginTop: 3.25 }}>
              {' '}
              <Typography color="#ffffff" variant="subtitle2" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standa.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1.25,
              }}
            >
              <FacebookIcon htmlColor="#ffffff" />
              <FacebookIcon htmlColor="#ffffff" />
              <FacebookIcon htmlColor="#ffffff" />
            </Box>
          </Box>

          <Box sx={{ flex: '1' }}>
            <Box>
              {' '}
              <SectionTitle
                sx={{
                  fontWeight: 600,
                }}
                color="#ffffff"
                variant="subtitle1"
                gutterBottom
              >
                Service
              </SectionTitle>
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                }}
              >
                <ListItem disablePadding>
                  <Typography
                    sx={{
                      margin: 0,
                    }}
                    color="#ffffff"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    sx={{
                      margin: 0,
                    }}
                    color="#ffffff"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    sx={{
                      margin: 0,
                    }}
                    color="#ffffff"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box></Box>
          </Box>

          <Box sx={{ flex: '1' }}>
            <Box>
              {' '}
              <SectionTitle
                sx={{
                  fontWeight: 600,
                }}
                color="#ffffff"
                variant="subtitle1"
                gutterBottom
              >
                Service
              </SectionTitle>
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                }}
              >
                <ListItem disablePadding>
                  <Typography
                    sx={{
                      margin: 0,
                    }}
                    color="#ffffff"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    sx={{
                      margin: 0,
                    }}
                    color="#ffffff"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography
                    sx={{
                      margin: 0,
                    }}
                    color="#ffffff"
                    variant="subtitle2"
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </SectionWrapper>
    </SectionWrapperFullWidth>
  );
};
