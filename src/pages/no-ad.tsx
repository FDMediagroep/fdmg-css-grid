import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import Head from 'next/head';
import React, { useEffect } from 'react';
import {
    addProgressBar,
    removeProgressBar,
} from '../components/article/FDArticleProgressBar';
import { GridContainer } from '../components/GridContainer';
import styles from './article.module.scss';

const metaTitle = 'No ads';
const metaDescription = 'Article page without ads using a grid';

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
                <h1>All in grid + no ad</h1>
            </section>

            <section className={`app-main article articleProgressTrack`}>
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            debug={true}
                            attributes={[
                                'm-1',
                                'hide-lt-m',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            attributes={[
                                'xs-12',
                                's-12',
                                'm-10',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
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
                                    Intro
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                        <GridContainer
                            debug={true}
                            attributes={[
                                'm-1',
                                'hide-lt-m',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />

                        <GridContainer
                            className="app-toolbar full-height"
                            attributes={['m-1', 'hide-lt-m', 'gap-1']}
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
                        <GridContainer
                            debug={true}
                            attributes={[
                                'm-1',
                                'hide-lt-m',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />
                    </GridContainer>
                </main>
            </section>
        </>
    );
}