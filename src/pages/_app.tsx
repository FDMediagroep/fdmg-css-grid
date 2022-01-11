import React, { useEffect } from 'react';
import Head from 'next/head';
import '../../scss/grid.scss';
import '../../scss/flex.scss'; // IE11
import './_app.scss';
import './index.scss';
import '@fdmg/design-system/components/design-tokens/design-tokens.css';
import '@fdmg/design-system/components/card/HybridCard1.css';
import '@fdmg/design-system/components/card/HybridCard2.css';
import '@fdmg/design-system/components/card/VerticalCard1.css';
import '@fdmg/design-system/components/toolbar/VerticalToolbar.css';
import '@fdmg/design-system/components/menu/Menu.css';
import '@fdmg/design-system/components/stockticker/StockTicker.css';
/**
 * Article styles
 */
import '@fdmg/design-system/components/article-meta/ArticleMeta.css';
import '@fdmg/design-system/components/article-image/ArticleImage.css';
import '@fdmg/design-system/components/infographic/Infographic.css';
import '@fdmg/design-system/components/article-image/InfographicExtended.css';
import '@fdmg/design-system/components/numberframe/NumberFrame.css';
import '@fdmg/design-system/components/quote/Quote.css';
import '@fdmg/design-system/components/readmore/ReadMore.css';
import '@fdmg/design-system/components/wordframe/WordFrame.css';
import '@fdmg/design-system/components/article-summary/Summary.css';
import '@fdmg/design-system/components/textframe/TextFrame.css';
import '@fdmg/design-system/components/article-link-block/LinkBlock.css';
import '@fdmg/design-system/components/vimeo/Vimeo.css';
import '@fdmg/design-system/components/youtube/Youtube.css';
import '@fdmg/design-system/components/bullet-point/BulletPoint.css';

import '../components/article/fd-article-progress-bar.scss';
import { debounce } from '../utils/debounce';

declare let document: any;

/**
 * Make sibling elements same height as its tallest sibling with the given CSS Class Name.
 */

function resizeSiblings(cssClassName: string) {
    console.debug('resizeSiblings');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            let siblingHeight = 0;
            const siblings: HTMLElement[] = [];
            [].slice.call(el.parentElement.childNodes).forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    siblingHeight = Math.max(
                        siblingHeight,
                        child.getBoundingClientRect().height
                    );
                    siblings.push(child);
                }
            });
            siblings.forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    child.style.height = `${siblingHeight}px`;
                }
            });
        });
}

function handleIE11FullHeight(cssClassName: string) {
    console.debug('handleIE11FullHeight');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            el.style.height = 'auto';
        });
    debounce(resizeSiblings.bind(null, cssClassName), 300);
}

function isIE() {
    const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); //IE 11

    return msie > 0 || trident > 0;
}

export default function App({ Component, pageProps }) {
    useEffect(() => {
        if (isIE()) {
            require('@webcomponents/webcomponentsjs');

            window.addEventListener(
                'resize',
                debounce.bind(
                    null,
                    () => handleIE11FullHeight('ie-full-height'),
                    300
                )
            );
            handleIE11FullHeight('ie-full-height');
        }
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </Head>

            <div className="dummy-menu" />

            <Component {...pageProps} />
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}
