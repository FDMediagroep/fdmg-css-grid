import React, { useEffect } from 'react';
import { GridContainer } from '../components/GridContainer';
import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import styles from './article5.module.scss';
import { Ad300x600 } from '../components/article/Ad300x600';

export default function Page() {
    useEffect(() => {
        document.documentElement.classList.add('article');
    }, []);

    return (
        <>
            <section className={`app-main article`}>
                <h1>
                    Grid + Fixed aside + centered article content + max-width
                    article content
                </h1>
            </section>

            <section className={`app-main article ${styles.intro}`}>
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            debug={true}
                            attributes={[
                                'm-2',
                                'xs-hide',
                                's-hide',
                                'm-show',
                                'gap-1',
                            ]}
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
                <aside className="xs-hide s-hide l-show">placeholder</aside>
            </section>
            <section className={`app-main article`}>
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            className="app-toolbar full-height"
                            attributes={['m-2', 'm-smaller-hide', 'gap-2']}
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
                <aside className="m-smaller-hide">
                    <Ad300x600 />
                </aside>
            </section>
        </>
    );
}