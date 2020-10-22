import React from 'react';
import Head from 'next/head';
import '../../scss/grid.scss';
import '../../scss/flex.scss'; // IE11
import './_app.scss';
import styles from './_app.module.scss';
import '@fdmg/design-system/components/design-tokens/design-tokens.css';
import '@fdmg/design-system/components/toolbar/VerticalToolbar.css';
import '@fdmg/design-system/components/menu/Menu.css';
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
                                text: 'Article 1',
                                component: (
                                    <Link href="/article">
                                        <a>Article 1</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Article 2',
                                component: (
                                    <Link href="/article2">
                                        <a>Article 2</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Article 3',
                                component: (
                                    <Link href="/article3">
                                        <a>Article 3</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Article 4',
                                component: (
                                    <Link href="/article4">
                                        <a>Article 4</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Article 5',
                                component: (
                                    <Link href="/article5">
                                        <a>Article 5</a>
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
