import React from 'react';
import { GridContainer } from '../components/GridContainer';
import { TopNav } from '../components/TopNav';
import styles from './article.module.scss';

export default function Page() {
    return (
        <>
            <TopNav />

            <section className={`app-main ${styles.intro}`}>
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            debug={true}
                            attributes={['xs-2', 'gap-1']}
                        />
                        <GridContainer
                            debug={true}
                            className="dummy-element"
                            attributes={['xs-10', 'gap-1']}
                            style={{ height: '250px' }}
                        >
                            Intro
                        </GridContainer>
                    </GridContainer>
                </main>
                <aside></aside>
            </section>
            <section className="app-main">
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            className="dummy-element sticky"
                            attributes={['xs-1', 'gap-2']}
                        >
                            Tool&shy;bar
                        </GridContainer>
                        <GridContainer
                            debug={true}
                            attributes={['xs-1', 'gap-2']}
                        />
                        <GridContainer attributes={['xs-10', 'gap-2']}>
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
                    </GridContainer>
                </main>
                <aside>
                    <div className="sticky dummy-element dummy-ad-300-600">
                        AD
                    </div>
                </aside>
            </section>
        </>
    );
}
