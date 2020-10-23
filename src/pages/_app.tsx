import React, { useEffect } from 'react';
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
import { debounce } from '../utils/debounce';

declare let document: any;

/**
 * Make sibling elements same height as its tallest sibling with the given CSS Class Name.
 */

function resizeSiblings(cssClassName: string) {
    console.debug('resizeSiblings');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            let siblingHeight = 0;
            const siblings: HTMLElement[] = [];
            [].slice.call(el.parentElement.childNodes).forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    siblingHeight = Math.max(
                        siblingHeight,
                        child.getBoundingClientRect().height
                    );
                    siblings.push(child);
                }
            });
            siblings.forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    child.style.height = `${siblingHeight}px`;
                }
            });
        });
}

function handleIE11FullHeight(cssClassName: string) {
    console.debug('handleIE11FullHeight');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            el.style.height = 'auto';
        });
    debounce(resizeSiblings.bind(null, cssClassName), 300);
}

function isIE() {
    const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); //IE 11

    return msie > 0 || trident > 0;
}

export default function App({ Component, pageProps }) {
    useEffect(() => {
        if (isIE) {
            require('@webcomponents/webcomponentsjs');

            window.addEventListener(
                'resize',
                debounce.bind(
                    null,
                    () => handleIE11FullHeight('ie-full-height'),
                    300
                )
            );
            handleIE11FullHeight('ie-full-height');
        }
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </Head>

            <div className="dummy-menu" />

            <Menu
                className={styles.menu}
                contentClassName={styles.menuContent}
                ariaLabel="Main menu"
                menuItems={[
                    {
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
                                component: (
                                    <Link href="/fixed-ad">
                                        <a>Fixed ad</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/all-grid">
                                        <a>All grid</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/no-ad">
                                        <a>No ad</a>
                                    </Link>
                                ),
                            },
                            {
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
            >
                <span>Placeholder</span>
            </Menu>

            <Component {...pageProps} />
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}
