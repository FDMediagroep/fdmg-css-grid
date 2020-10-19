import React from 'react';

interface Props {
    className?: string;
    [x: string]: any;
}

export function Teaser(props: Props) {
    return (
        <div
            className={props.className}
            style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '1rem' }}
        >
            {props.className}
        </div>
    );
}
