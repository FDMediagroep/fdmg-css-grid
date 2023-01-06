import React, { useEffect } from 'react';
import { Ad300x300 } from '../components/article/Ad300x300';
import { GridContainer } from '../components/GridContainer';
import { StockTicker } from '@fdmg/design-system/components/stockticker/StockTicker';
import { HybridCard1 } from '@fdmg/design-system/components/card/HybridCard1';
import { HybridCard2 } from '@fdmg/design-system/components/card/HybridCard2';
import { VerticalCard1 } from '@fdmg/design-system/components/card/VerticalCard1';
import styles from './index.module.scss';

export default function Page() {
    useEffect(() => {
        document.documentElement.classList.remove('article');
    }, []);

    return (
        <>
            <section className={`app-main section`}>
                <main>
                    <StockTicker
                        className={styles.stockTicker}
                        stocks={[
                            {
                                href: '/',
                                name: 'AEX',
                                open: true,
                                percentage: -0.14,
                                price: 465.59,
                            },
                            {
                                href: '/',
                                name: 'AMX',
                                open: true,
                                percentage: -1.67,
                                price: 633.16,
                            },
                            {
                                href: '/',
                                name: 'AScX',
                                open: true,
                                percentage: 0.88,
                                price: 652.66,
                            },
                            {
                                href: '/',
                                name: 'S&P Fut',
                                open: false,
                                percentage: 0.46,
                                price: 2536.5,
                            },
                            {
                                href: '/',
                                name: '€/$',
                                open: true,
                                percentage: 0.77,
                                price: 1.1038,
                            },
                            {
                                href: '/',
                                name: 'Olie',
                                open: true,
                                percentage: 9.42,
                                price: 20.48,
                            },
                        ]}
                    />
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
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        'm-6',
                                        'gap-1',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1357440"
                                        imageUrl="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        imageUrlL="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        intro="Nederlands bedrijf met aandelenportefeuille betaalt het gelag."
                                        isRead
                                        label="Fiscaal"
                                        readingTime={2}
                                        title="Kabinet verwacht bijna €1 mrd aan dividendbelasting te moeten terugbetalen"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        'm-6',
                                        'gap-1',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1321841"
                                        imageUrl="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlL="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        intro="Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen."
                                        label="Detailhandel"
                                        readingTime={5}
                                        title="Den Haag zet druk op verhuurders om huurverlaging te slikken"
                                        url="/all-grid"
                                    />
                                </GridContainer>

                                <GridContainer
                                    className="ie-full-height"
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1345422"
                                        imageUrl="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlL="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        intro="Scherpe stijging met 17% tot 292.000 uitkeringen, blijkt uit cijfers van het UWV. Tijdens de kredietcrisis in 2008 liep de werkloosheid veel geleidelijker op."
                                        label="Arbeidsmarkt"
                                        readingTime={3}
                                        title="Lockdown leidt tot recordstijging aantal WW-uitkeringen in april"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className="ie-full-height"
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1321841"
                                        imageUrl="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlL="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        intro="Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen."
                                        label="Detailhandel"
                                        readingTime={5}
                                        title="Den Haag zet druk op verhuurders om huurverlaging te slikken"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className="ie-full-height"
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1357440"
                                        imageUrl="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        imageUrlL="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        intro="Nederlands bedrijf met aandelenportefeuille betaalt het gelag."
                                        isRead
                                        label="Fiscaal"
                                        readingTime={2}
                                        title="Kabinet verwacht bijna €1 mrd aan dividendbelasting te moeten terugbetalen"
                                        url="/all-grid"
                                    />
                                </GridContainer>

                                <GridContainer
                                    className="ie-full-height"
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1345422"
                                        imageUrl="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlL="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        intro="Scherpe stijging met 17% tot 292.000 uitkeringen, blijkt uit cijfers van het UWV. Tijdens de kredietcrisis in 2008 liep de werkloosheid veel geleidelijker op."
                                        label="Arbeidsmarkt"
                                        readingTime={3}
                                        title="Lockdown leidt tot recordstijging aantal WW-uitkeringen in april"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className="ie-full-height"
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1321841"
                                        imageUrl="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlL="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        intro="Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen."
                                        label="Detailhandel"
                                        readingTime={5}
                                        title="Den Haag zet druk op verhuurders om huurverlaging te slikken"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className="ie-full-height"
                                    attributes={[
                                        'xs-12',
                                        'm-4',
                                        'gap-2',
                                        'gap-bottom',
                                    ]}
                                >
                                    <VerticalCard1
                                        className="full-height"
                                        id="1357440"
                                        imageUrl="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        imageUrlL="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/yDQG_K45XE2ZIJOmE57wc1FIbcM.jpg?fit=crop&crop=faces&auto=format,compress&q=45&w=599&h=399"
                                        intro="Nederlands bedrijf met aandelenportefeuille betaalt het gelag."
                                        isRead
                                        label="Fiscaal"
                                        readingTime={2}
                                        title="Kabinet verwacht bijna €1 mrd aan dividendbelasting te moeten terugbetalen"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                        <GridContainer
                            className={`${styles.sideContent} full-height`}
                            attributes={['xs-12', 'l-3', 'gap-1', 'gap-bottom']}
                        >
                            <div
                                className={`dummy-card full-width ${styles.content}`}
                            >
                                latest news
                            </div>
                            <Ad300x300 className="hide-lt-xl" />
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Nieuws</h1>
                                <hr />
                            </GridContainer>
                            <GridContainer
                                className="no-gap-bottom-s"
                                attributes={['grid', 'xs-12', 'gap-bottom']}
                            >
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        className="full-height"
                                        id="1345386"
                                        label="Markten"
                                        readingTime={3}
                                        title="'Beleggers verwachten nieuwe klap op beurzen'"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        className={`full-height`}
                                        id="1345186"
                                        label="Markten"
                                        title="Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        className={`full-height`}
                                        id="1345444"
                                        isRead
                                        label="Arbeidsmarkt"
                                        readingTime={11}
                                        title="Bulk van de werklozen komt in de komende maanden"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        className="full-height"
                                        id="1345386"
                                        label="Markten"
                                        readingTime={3}
                                        title="'Beleggers verwachten nieuwe klap op beurzen'"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        className={`full-height`}
                                        id="1345186"
                                        label="Markten"
                                        title="Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard2
                                        className={`full-height`}
                                        id="1345444"
                                        isRead
                                        label="Arbeidsmarkt"
                                        readingTime={11}
                                        title="Bulk van de werklozen komt in de komende maanden"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Achtergrond</h1>
                                <hr />
                            </GridContainer>
                            <GridContainer
                                className="no-gap-bottom-s"
                                attributes={['grid', 'xs-12']}
                            >
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345386"
                                        imageUrl="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America."
                                        label="Markten"
                                        readingTime={3}
                                        title="'Beleggers verwachten nieuwe klap op beurzen'"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345186"
                                        imageUrl="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. "
                                        label="Markten"
                                        readingTime={5}
                                        title="Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        isRead
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Beurs</h1>
                                <hr />
                            </GridContainer>
                            <GridContainer
                                className="no-gap-bottom-s"
                                attributes={['grid', 'xs-12']}
                            >
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345386"
                                        imageUrl="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America."
                                        label="Markten"
                                        readingTime={3}
                                        title="'Beleggers verwachten nieuwe klap op beurzen'"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345186"
                                        imageUrl="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. "
                                        label="Markten"
                                        readingTime={5}
                                        title="Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        isRead
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Columns &amp; Opinie</h1>
                                <hr />
                            </GridContainer>
                            <GridContainer
                                className="no-gap-bottom-s"
                                attributes={['grid', 'xs-12']}
                            >
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345386"
                                        imageUrl="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America."
                                        label="Markten"
                                        readingTime={3}
                                        title="'Beleggers verwachten nieuwe klap op beurzen'"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345186"
                                        imageUrl="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. "
                                        label="Markten"
                                        readingTime={5}
                                        title="Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        isRead
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Tech &amp; Innovatie</h1>
                                <hr />
                            </GridContainer>
                            <GridContainer
                                className="no-gap-bottom-s"
                                attributes={['grid', 'xs-12']}
                            >
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345386"
                                        imageUrl="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America."
                                        label="Markten"
                                        readingTime={3}
                                        title="'Beleggers verwachten nieuwe klap op beurzen'"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345186"
                                        imageUrl="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. "
                                        label="Markten"
                                        readingTime={5}
                                        title="Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        isRead
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>FD Persoonlijk</h1>
                                <hr />
                            </GridContainer>
                            <GridContainer
                                className="no-gap-bottom-s"
                                attributes={['grid', 'xs-12']}
                            >
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345386"
                                        imageUrl="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/2V1xFJ-1OddgzcJgKmiPOv0t4yY.jpg?fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Een tweede coronagolf staat bovenaan de lijst met zorgen van fondsmanagers, volgens een enquête van Bank of America."
                                        label="Markten"
                                        readingTime={3}
                                        title="'Beleggers verwachten nieuwe klap op beurzen'"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        className={`full-height`}
                                        id="1345186"
                                        imageUrl="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        imageUrlL="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=599&h=399"
                                        imageUrlM="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.095%2c.1069418386491557%2c.79625%2c.7954971857410882&fit=crop&crop=faces&auto=format&q=45&w=351&h=234"
                                        imageUrlS="https://images.fd.nl/MtOzOM5dkRKSllJlW5ZAjzO82yQ.jpg?rect=.21625%2c.1125703564727955%2c.50625%2c.7598499061913696&fit=crop&crop=faces&auto=format&q=45&w=300"
                                        intro="Na een kortstondig avontuur bij het ruziënde Centric vindt financieel bestuurder Rianne Jans onderdak bij accountants. "
                                        label="Markten"
                                        readingTime={5}
                                        title="Deloitte krijgt met Rianne Jans een onverstoorbare cfo in huis"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                                <GridContainer
                                    className={`ie-full-height`}
                                    attributes={[
                                        'xs-12',
                                        's-6',
                                        'l-3',
                                        'gap-1',
                                        'gap-3',
                                        'gap-bottom',
                                    ]}
                                >
                                    <HybridCard1
                                        caption="Ed Groot"
                                        className={`full-height`}
                                        id="1345406"
                                        imageUrl="https://images.fd.nl/cc2bdc81cff5f4f5a1a466e977ff41c8c43c13fe.jpg?fit=crop&crop=faces&auto=format&q=45&w=300&h=300"
                                        intro="De staalindustrie is misschien wel belangrijker voor de bv Nederland dan de KLM."
                                        isRead
                                        label="Kleintje Groot"
                                        readingTime={7}
                                        title="Hoogovens of KLM?"
                                        url="/all-grid"
                                    />
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>

                        <GridContainer attributes={['grid', 'xs-12']}>
                            <GridContainer attributes={['xs-12']}>
                                <h1>Dagoverzicht</h1>
                                <hr />
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
