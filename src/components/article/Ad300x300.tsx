import React from 'react';

function Ad300x300(props: any) {
    return (
        <div className={`${props.className ?? ''} sticky dummy-ad-300`}>
            <img src="/assets/images/advertorialAd.png" />
        </div>
    );
}

export { Ad300x300 };
