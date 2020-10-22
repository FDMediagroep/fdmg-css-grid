import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import React, { useEffect } from 'react';
import { Ad300x600 } from '../components/article/Ad300x600';
import styles from './article4.module.scss';

export default function Page() {
    useEffect(() => {
        document.documentElement.classList.add('article');
    }, []);

    return (
        <>
            <section className="app-main article">
                <h1>No grid</h1>
            </section>

            <section
                className={`app-main article ${styles.content}`}
                style={{ height: '250px' }}
            >
                <section
                    className={`xs-hide s-hide m-show ${styles.leftSection}`}
                />
                <main className={styles.main}>
                    <div className="dummy-element full-height">intro</div>
                </main>
                <aside className="xs-hide s-hide l-show" />
            </section>

            <section className={`app-main article`}>
                <section
                    className={`app-toolbar m-smaller-hide ${styles.leftSection}`}
                >
                    <VerticalToolbar
                        id="12345"
                        className="left sticky"
                        bookmarked={false}
                        onClick={console.log}
                    />
                </section>
                <main className={styles.main}>
                    <div
                        className={`dummy-element ${styles.content}`}
                        style={{ height: '300px' }}
                    >
                        afbeelding
                    </div>
                    <div
                        className={`dummy-element ${styles.content}`}
                        style={{ height: '1000px' }}
                    >
                        body
                    </div>
                </main>
                <aside className="m-smaller-hide">
                    <Ad300x600 />
                </aside>
            </section>
        </>
    );
}
