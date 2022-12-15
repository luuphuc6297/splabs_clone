import React from 'react';

export const IconChevronRightSvg = ({ ...props }) => {
    return (
        <svg
            cursor="pointer"
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
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );
};
