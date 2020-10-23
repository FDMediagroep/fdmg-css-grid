import React from 'react';
import Head from 'next/head';
import '../../scss/grid.scss';
import '../../scss/flex.scss'; // IE11
import './_app.scss';
import styles from './_app.module.scss';
import '@fdmg/design-system/components/design-tokens/design-tokens.css';
import '@fdmg/design-system/components/card/HybridCard1.css';
import '@fdmg/design-system/components/card/HybridCard2.css';
import '@fdmg/design-system/components/card/VerticalCard1.css';
import '@fdmg/design-system/components/toolbar/VerticalToolbar.css';
import '@fdmg/design-system/components/menu/Menu.css';
import '@fdmg/design-system/components/stockticker/StockTicker.css';
import { Menu } from '@fdmg/design-system/components/menu/Menu';
import { Themes } from '../components/Themes';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </Head>

            <Menu
                className={styles.menu}
                ariaLabel="Main menu"
                menuItems={[
                    {
                        text: 'Home',
                        component: (
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        ),
                    },
                    {
                        text: 'Articles',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'Fixed ad',
                                component: (
                                    <Link href="/fixed-ad">
                                        <a>Fixed ad</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'All grid',
                                component: (
                                    <Link href="/all-grid">
                                        <a>All grid</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'No ad',
                                component: (
                                    <Link href="/no-ad">
                                        <a>No ad</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'No grid',
                                component: (
                                    <Link href="/no-grid">
                                        <a>No grid</a>
                                    </Link>
                                ),
                            },
                        ],
                    },
                ]}
                moreMenuItems={[
                    {
                        text: 'About',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'GitHub',
                                component: (
                                    <a
                                        href="https://github.com/FDMediagroep/fdmg-css-grid"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.invertable} ${styles.github}`}
                                        title="Open GitHub"
                                    >
                                        <figure>
                                            <picture>
                                                <source
                                                    media="(max-width: 640px)"
                                                    srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x`}
                                                />
                                                <source
                                                    media="(min-width:641px)"
                                                    srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x, /assets/github/GitHub-Mark-120px-plus.png 3x`}
                                                />
                                                <img
                                                    alt="GitHub"
                                                    src={`/assets/github/GitHub-Mark-32px.png`}
                                                />
                                            </picture>
                                            <figcaption>GitHub</figcaption>
                                        </figure>
                                    </a>
                                ),
                            },
                            {
                                text: 'Themes',
                                component: (
                                    <Themes
                                        className={styles.themes}
                                        groupName="sub-menu-themes"
                                    />
                                ),
                            },
                            {
                                text: 'Test',
                                href: '/test',
                            },
                        ],
                    },
                ]}
            />

            <Component {...pageProps} />
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}
