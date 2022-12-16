import { Box } from '@mui/material';
import { PresentationCard } from 'components';
import React from 'react';
import presentation from './presentation.json';

export const Presentation = () => {
    const renderPresentation = React.useCallback(() => {
        return presentation.payload.map(
            ({ id, step, title, top_caption, bot_caption }) => (
                <PresentationCard
                    key={id}
                    id={id}
                    title={title}
                    step={step}
                    top_caption={top_caption}
                    bot_caption={bot_caption}
                />
            )
        );
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {renderPresentation()}
        </Box>
    );
};
