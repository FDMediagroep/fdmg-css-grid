import React, { useEffect } from 'react';
import Head from 'next/head';
import '../../scss/grid.scss';
import '../../scss/flex.scss'; // IE11
import './_app.scss';
import '@fdmg/design-system/components/design-tokens/design-tokens.css';
import '@fdmg/design-system/components/toolbar/VerticalToolbar.css';
import { Themes } from '../components/Themes';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require('@webcomponents/webcomponentsjs');
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </Head>
            <Component {...pageProps} />
            <Themes />
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}
