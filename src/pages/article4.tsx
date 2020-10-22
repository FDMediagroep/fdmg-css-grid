import React from 'react';
import { TopNav } from '../components/TopNav';
import styles from './article4.module.scss';

export default function Page() {
    return (
        <>
            <TopNav />

            <section className="app-main">
                <h1>No grid</h1>
            </section>

            <section
                className={`app-main ${styles.content}`}
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

            <section className={`app-main`}>
                <section
                    className={`app-toolbar xs-hide s-hide m-show ${styles.leftSection}`}
                >
                    <div className="sticky left dummy-element">toolbar</div>
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
                <aside className="xs-hide s-hide l-show">
                    <div className="sticky dummy-element dummy-ad-300-600">
                        AD
                    </div>
                </aside>
            </section>
        </>
    );
}
