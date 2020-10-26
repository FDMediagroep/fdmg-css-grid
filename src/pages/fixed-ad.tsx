import React, { useEffect } from 'react';
import { GridContainer } from '../components/GridContainer';
import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import styles from './article.module.scss';
import { Ad300x600 } from '../components/article/Ad300x600';
import Head from 'next/head';
import {
    addProgressBar,
    removeProgressBar,
} from '../components/article/FDArticleProgressBar';

const metaTitle = 'Fixed ads';
const metaDescription =
    'Article page using a grid next to a fixed-width ads aside';

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

            <section className={`app-main article`}>
                <h1>
                    Grid + Fixed aside + centered article content + max-width
                    article content
                </h1>
            </section>

            <div className="articleProgressTrack">
                <section className={`app-main article ${styles.intro}`}>
                    <main>
                        <GridContainer attributes={['grid']}>
                            <GridContainer
                                debug={true}
                                attributes={['m-2', 'hide-lt-m', 'gap-1']}
                            />
                            <GridContainer
                                debug={true}
                                attributes={['xs-12', 's-12', 'm-10', 'gap-1']}
                            >
                                <GridContainer
                                    className={styles.content}
                                    attributes={['grid']}
                                >
                                    <GridContainer
                                        debug={true}
                                        className={`dummy-element`}
                                        attributes={['xs-12', 'gap-bottom']}
                                        style={{ height: '250px' }}
                                    >
                                        Intro
                                    </GridContainer>
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                    </main>
                    <aside className="hide-lt-l">placeholder</aside>
                </section>
                <section className={`app-main article`}>
                    <main>
                        <GridContainer attributes={['grid']}>
                            <GridContainer
                                className="app-toolbar full-height"
                                attributes={['m-2', 'hide-lt-m', 'gap-2']}
                            >
                                <VerticalToolbar
                                    id="12345"
                                    className="left sticky"
                                    bookmarked={false}
                                    onClick={console.log}
                                />
                            </GridContainer>
                            <GridContainer
                                attributes={['xs-12', 's-12', 'm-10', 'gap-1']}
                            >
                                <GridContainer
                                    className={styles.content}
                                    attributes={['grid']}
                                >
                                    <GridContainer
                                        debug={true}
                                        className="dummy-element"
                                        attributes={['xs-12', 'gap-bottom']}
                                        style={{ height: '300px' }}
                                    >
                                        Afbeelding
                                    </GridContainer>
                                    <GridContainer
                                        debug={true}
                                        className="dummy-element"
                                        attributes={['xs-12', 'gap-bottom']}
                                        style={{ height: '1000px' }}
                                    >
                                        Article body
                                    </GridContainer>
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                    </main>
                    <aside className="hide-lt-l">
                        <Ad300x600 />
                    </aside>
                </section>
            </div>
        </>
    );
}