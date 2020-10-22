import React from 'react';
import { GridContainer } from '../components/GridContainer';
import { TopNav } from '../components/TopNav';
import styles from './index.module.scss';

export default function Page() {
    return (
        <>
            <TopNav />

            <section className="app-main section">
                <main>
                    <GridContainer
                        className={`${styles.stockTicker}`}
                        attributes={['grid']}
                    >
                        <span className="dummy-element">AEX</span>
                        <span className="dummy-element">AMX</span>
                        <span className="dummy-element">ASCX</span>
                        <span className="dummy-element">S&amp;P FUT</span>
                        <span className="dummy-element">&euro;/$;</span>
                        <span className="dummy-element xs-hide s-hide l-show">
                            OLIE
                        </span>
                    </GridContainer>
                </main>
            </section>

            <section className="app-main section">
                <main>
                    <GridContainer
                        className="top-content"
                        attributes={['grid']}
                    >
                        <GridContainer
                            className="editorial-content"
                            attributes={['xs-12', 'l-9', 'gap-1', 'gap-bottom']}
                        >
                            <GridContainer attributes={['xs-12', 'grid']}>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-6',
                                        'gap-1',
                                        'gap-bottom',
                                    ]}
                                >
                                    opening 1
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-6',
                                        'gap-1',
                                        'gap-bottom',
                                    ]}
                                >
                                    opening 2
                                </GridContainer>

                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    desked 1
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    desked 2
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    desked 3
                                </GridContainer>

                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    desked 4
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    desked 5
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    desked 6
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                        <GridContainer
                            className="side-content full-height"
                            attributes={['xs-12', 'l-3', 'gap-1', 'gap-bottom']}
                        >
                            <div className={`dummy-card ${styles.content}`}>
                                latest news
                            </div>
                            <div
                                className={`dummy-element sticky dummy-ad-300 xs-hide s-hide xl-show`}
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
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
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
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
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
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
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
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
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
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
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
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                                <GridContainer
                                    className={`dummy-card`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    card
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer
                                className={`dummy-element`}
                                attributes={['xs-12']}
                            >
                                <h1>Dagoverzicht</h1>
                                <GridContainer attributes={['grid', 'xs-12']}>
                                    <GridContainer
                                        attributes={[
                                            'xs-12',
                                            'm-6',
                                            'l-4',
                                            'gap-1',
                                            'gap-2',
                                            'gap-bottom',
                                        ]}
                                    >
                                        <h2>Algemeen</h2>
                                    </GridContainer>
                                    <GridContainer
                                        attributes={[
                                            'xs-12',
                                            'm-6',
                                            'l-4',
                                            'gap-1',
                                            'gap-2',
                                            'gap-bottom',
                                        ]}
                                    >
                                        <h2>Achtergrond</h2>
                                        <h2>Beurs</h2>
                                        <h2>Columns &amp; Opinie</h2>
                                    </GridContainer>
                                    <GridContainer
                                        attributes={[
                                            'xs-12',
                                            'l-4',
                                            'gap-1',
                                            'gap-2',
                                            'gap-bottom',
                                        ]}
                                    >
                                        <h2>Tech &amp; Innovatie</h2>
                                        <h2>FD Persoonlijk</h2>
                                    </GridContainer>
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                    </GridContainer>
                </main>
            </section>
        </>
    );
}
