import React from 'react';
import Head from 'next/head';
import '../../scss/grid.scss';
import '../../scss/flex.scss';
import './_app.scss';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </Head>
            <section className="app-main">
                <main>
                    <Component {...pageProps} />
                </main>
                <aside>
                    <div>AD</div>
                </aside>
            </section>
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}
