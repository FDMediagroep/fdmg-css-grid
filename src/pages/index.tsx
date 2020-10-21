import React from 'react';
import { GridContainer } from '../components/GridContainer';
import { TopNav } from '../components/TopNav';
import styles from './index.module.scss';

export default function Page() {
    return (
        <>
            <TopNav />

            <section className="app-main xs-hide s-hide m-show">
                <div
                    className={`dummy-element ${styles.stockTicker} ${styles.content}`}
                >
                    stock ticker
                </div>
            </section>

            <section className="app-main">
                <main>
                    <GridContainer
                        className="top-content"
                        attributes={['grid']}
                    >
                        <GridContainer
                            className="editorial-content"
                            attributes={['l-9', 'gap-1', 'gap-bottom']}
                        >
                            <GridContainer attributes={['xs-12', 'grid']}>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-6']}
                                >
                                    opening 1
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-6']}
                                >
                                    opening 2
                                </GridContainer>

                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-4']}
                                >
                                    desked 1
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-4']}
                                >
                                    desked 2
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-4']}
                                >
                                    desked 3
                                </GridContainer>

                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-4']}
                                >
                                    desked 4
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-4']}
                                >
                                    desked 5
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-4']}
                                >
                                    desked 6
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                        <GridContainer
                            className="side-content full-height"
                            attributes={['l-3', 'gap-1', 'gap-bottom']}
                        >
                            <div className={`dummy-element ${styles.content}`}>
                                latest news
                            </div>
                            <div
                                className={`dummy-element sticky  ${styles.content}`}
                            >
                                Ad
                            </div>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Nieuws</h1>
                            </GridContainer>
                            <GridContainer attributes={['grid', 'xs-12']}>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Achtergrond</h1>
                            </GridContainer>
                            <GridContainer attributes={['grid', 'xs-12']}>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Beurs</h1>
                            </GridContainer>
                            <GridContainer attributes={['grid', 'xs-12']}>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Columns &amp; Opinie</h1>
                            </GridContainer>
                            <GridContainer attributes={['grid', 'xs-12']}>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Tech &amp; Innovatie</h1>
                            </GridContainer>
                            <GridContainer attributes={['grid', 'xs-12']}>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>FD Persoonlijk</h1>
                            </GridContainer>
                            <GridContainer attributes={['grid', 'xs-12']}>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-element ${styles.content}`}
                                    attributes={['xs-3']}
                                >
                                    card
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Dagoverzicht</h1>
                            </GridContainer>
                        </GridContainer>
                    </GridContainer>
                </main>
            </section>
        </>
    );
}
