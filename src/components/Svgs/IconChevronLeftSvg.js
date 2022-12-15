import React from 'react';

export const IconChevronLeftSvg = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            {...props}
        >
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    );
};
