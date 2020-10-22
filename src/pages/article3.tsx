import React from 'react';
import { GridContainer } from '../components/GridContainer';
import { TopNav } from '../components/TopNav';
import styles from './article.module.scss';

export default function Page() {
    return (
        <>
            <TopNav />

            <section className={`app-main ${styles.main}`}>
                <h1>Grid + Fixed aside + max-width all</h1>
            </section>

            <section className={`app-main ${styles.intro} ${styles.main}`}>
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
                            ]}
                        />
                        <GridContainer
                            debug={true}
                            className="dummy-element"
                            attributes={[
                                'xs-12',
                                's-12',
                                'm-10',
                                'xl-9',
                                'gap-1',
                            ]}
                            style={{ height: '250px' }}
                        >
                            Intro
                        </GridContainer>
                    </GridContainer>
                </main>
                <aside className="xs-hide s-hide l-show">placeholder</aside>
            </section>
            <section className={`app-main ${styles.main}`}>
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            className="sticky app-toolbar"
                            attributes={[
                                'm-2',
                                'xl-3',
                                'xs-hide',
                                's-hide',
                                'm-show',
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
                                'xl-9',
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
                    </GridContainer>
                </main>
                <aside className="xs-hide s-hide l-show">
                    <div className="sticky dummy-element dummy-ad-300-600">
                        AD
                    </div>
                </aside>
            </section>
        </>
    );
}
