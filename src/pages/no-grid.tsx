import { ArticleMeta } from '@fdmg/design-system/components/article-meta/ArticleMeta';
import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Ad300x600 } from '../components/article/Ad300x600';
import {
    addProgressBar,
    removeProgressBar,
} from '../components/article/FDArticleProgressBar';
import { DOMParser } from '@xmldom/xmldom';

import { mergeInlineContent } from '../utils/articleContent';
import { OEmbedLoader } from '../utils/OEmbedLoader';
import { getPayload } from './api/[section]/[id]/[title]';
import styles from './article.module.scss';
import articleStyles from '../components/article/Article.module.scss';

const metaTitle = 'No grid';
const metaDescription = 'Article page layout freely styled without a grid';

interface Props {
    section: string;
    id: number;
    title: string;
    authors: any;
    article: any;
    articleXml: string;
    data: string;
    formattedPublicationDate: string;
}

export default function Page(props: Props) {
    const [jsxContent] = useState(
        mergeInlineContent(
            new DOMParser().parseFromString(props.articleXml, 'text/xml')
        )
    );

    useEffect(() => {
        document.documentElement.classList.add('article');

        new OEmbedLoader(
            '.soundcloud-embed',
            'jsonp',
            'https://soundcloud.com/oembed?format=js&url='
        );
        new OEmbedLoader(
            '.twitter-embed',
            'jsonp',
            'https://api.twitter.com/1/statuses/oembed.json?url='
        );
        new OEmbedLoader(
            '.instagram-embed',
            'json',
            'https://api.instagram.com/oembed?url='
        );

        const containerElement = document.querySelector(`.menu`);
        const trackedElement = document.querySelector('.articleProgressTrack');

        addProgressBar(containerElement, trackedElement);

        return () => {
            removeProgressBar();
        };
    }, []);

    return (
        <div className={articleStyles.article}>
            <Head>
                <title>
                    {metaTitle} - FDMG CSS Grid - Het Financieele Dagblad
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <div className=" articleProgressTrack">
                <section className={`app-main article`}>
                    <section className={`hide-lt-m ${styles.leftSection}`} />
                    <main>
                        <div className={`full-height ${styles.noGridContent}`}>
                            <header>
                                <ArticleMeta
                                    authors={props.authors}
                                    date={props.formattedPublicationDate}
                                />

                                <h1>{props.article.title}</h1>
                                <p className={articleStyles.intro}>
                                    {props.article.intro}
                                </p>
                            </header>
                        </div>
                    </main>
                    <aside className="hide-lt-l" />
                </section>

                <section className={`app-main article`}>
                    <section className={`hide-lt-m ${styles.leftSection}`}>
                        <VerticalToolbar
                            id="12345"
                            className="left sticky"
                            bookmarked={false}
                            onClick={console.log}
                        />
                    </section>
                    <main>
                        <div
                            className={`${articleStyles.articleBody} ${styles.noGridContent}`}
                        >
                            {jsxContent}
                        </div>
                    </main>
                    <aside className="hide-lt-l">
                        <Ad300x600 />
                    </aside>
                </section>
            </div>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const data = await getPayload(params);
    let article: any;
    let authors: any[] = [];
    let formattedPublicationDate: string;

    try {
        article = data.accessModel.pageContext.analyticsParameters.article;
        authors = data.articleDetailsModel.authorInfoList;
        formattedPublicationDate =
            data.articleDetailsModel.formattedPublicationDate;
    } catch (e) {
        console.error(e);
    }

    return {
        props: {
            // section: params?.section,
            // id: params?.id,
            // title: params?.title,
            data,
            formattedPublicationDate,
            authors,
            article: article ?? null,
            articleXml: `<xml>${article?.content}</xml>`,
        },
    };
}
