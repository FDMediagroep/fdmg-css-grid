import React from 'react';

function Ad300x600(props: any) {
    return (
        <div className={`${props.className ?? ''} sticky dummy-ad-300`}>
            <img src="/assets/images/ad.png" alt="ad" />
        </div>
    );
}

export { Ad300x600 };
