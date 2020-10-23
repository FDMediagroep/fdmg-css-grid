import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Ad300x600 } from '../components/article/Ad300x600';
import {
    addProgressBar,
    removeProgressBar,
} from '../components/article/FDArticleProgressBar';
import styles from './article.module.scss';

const metaTitle = 'No grid';
const metaDescription = 'Article page layout freely styled without a grid';

export default function Page() {
    useEffect(() => {
        document.documentElement.classList.add('article');

        const containerElement = document.querySelector(`.menu`);
        const trackedElement = document.querySelector(
            '.articleProgressTrack'
        ) as HTMLElement;

        addProgressBar(containerElement, trackedElement);

        return () => {
            removeProgressBar();
        };
    }, []);

    return (
        <>
            <Head>
                <title>
                    {metaTitle} - FDMG CSS Grid - Het Financieele Dagblad
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <section className="app-main article">
                <h1>No grid</h1>
            </section>

            <div className=" articleProgressTrack">
                <section className={`app-main article`}>
                    <section className={`hide-lt-m ${styles.leftSection}`} />
                    <main>
                        <div
                            className={`dummy-element full-height ${styles.noGridContent}`}
                            style={{ height: '250px' }}
                        >
                            intro
                        </div>
                    </main>
                    <aside className="hide-lt-l" />
                </section>

                <section className={`app-main article`}>
                    <section
                        className={`app-toolbar hide-lt-m ${styles.leftSection}`}
                    >
                        <VerticalToolbar
                            id="12345"
                            className="left sticky"
                            bookmarked={false}
                            onClick={console.log}
                        />
                    </section>
                    <main>
                        <div
                            className={`dummy-element ${styles.noGridContent}`}
                            style={{ height: '300px' }}
                        >
                            afbeelding
                        </div>
                        <div
                            className={`dummy-element ${styles.noGridContent}`}
                            style={{ height: '1000px' }}
                        >
                            body
                        </div>
                    </main>
                    <aside className="hide-lt-l">
                        <Ad300x600 />
                    </aside>
                </section>
            </div>
        </>
    );
}
