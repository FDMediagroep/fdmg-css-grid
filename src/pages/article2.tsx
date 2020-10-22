import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import React, { useEffect } from 'react';
import { Ad300x600 } from '../components/article/Ad300x600';
import { GridContainer } from '../components/GridContainer';
import styles from './article.module.scss';

export default function Page() {
    useEffect(() => {
        document.documentElement.classList.add('article');
    }, []);

    return (
        <>
            <section className="app-main article">
                <h1>All in grid</h1>
            </section>

            <section className={`app-main article ${styles.main2}`}>
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            debug={true}
                            attributes={[
                                'm-2',
                                'xl-3',
                                'xs-hide',
                                's-hide',
                                'm-show',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className="dummy-element"
                            attributes={[
                                'xs-12',
                                's-12',
                                'm-10',
                                'l-6',
                                'xl-5',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                            style={{ height: '250px' }}
                        >
                            Intro
                        </GridContainer>
                        <GridContainer
                            debug={true}
                            attributes={[
                                'l-4',
                                'xs-hide',
                                's-hide',
                                'l-show',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />

                        <GridContainer
                            className="app-toolbar full-height"
                            attributes={[
                                'm-2',
                                'l-2',
                                'xl-3',
                                'm-smaller-hide',
                                'gap-1',
                                'gap-2',
                            ]}
                        >
                            <VerticalToolbar
                                id="12345"
                                className="left sticky"
                                bookmarked={false}
                                onClick={console.log}
                            />
                        </GridContainer>
                        <GridContainer
                            attributes={[
                                'xs-12',
                                's-12',
                                'm-10',
                                'l-6',
                                'xl-5',
                                'gap-1',
                                'gap-2',
                            ]}
                        >
                            <GridContainer attributes={['grid']}>
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
                            className={`sticky ${styles.aside2}`}
                            attributes={['l-4', 'm-smaller-hide', 'gap-2']}
                        >
                            <Ad300x600 />
                        </GridContainer>
                    </GridContainer>
                </main>
            </section>
        </>
    );
}
