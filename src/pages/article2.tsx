import React from 'react';
import { GridContainer } from '../components/GridContainer';
import { TopNav } from '../components/TopNav';
import styles from './article.module.scss';

export default function Page() {
    return (
        <>
            <TopNav />

            <section className={`app-main ${styles.main2}`}>
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
                            className="sticky app-toolbar"
                            attributes={[
                                'm-2',
                                'l-2',
                                'xl-3',
                                'xs-hide',
                                's-hide',
                                'm-show',
                                'gap-1',
                                'gap-2',
                            ]}
                        >
                            <div className="dummy-element left">
                                Tool&shy;bar
                            </div>
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
                            attributes={[
                                'l-4',
                                'xs-hide',
                                's-hide',
                                'l-show',
                                'gap-2',
                            ]}
                        >
                            <div className="dummy-element dummy-ad-300-600 right">
                                Ad
                            </div>
                        </GridContainer>
                    </GridContainer>
                </main>
            </section>
        </>
    );
}
