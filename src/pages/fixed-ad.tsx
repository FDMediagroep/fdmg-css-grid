import React, { useEffect, useState } from 'react';
import { GridContainer } from '../components/GridContainer';
import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import styles from './article.module.scss';
import articleStyles from '../components/article/Article.module.scss';
import { Ad300x600 } from '../components/article/Ad300x600';
import Head from 'next/head';
import {
    addProgressBar,
    removeProgressBar,
} from '../components/article/FDArticleProgressBar';
import { DOMParser } from '@xmldom/xmldom';

import { ArticleMeta } from '@fdmg/design-system/components/article-meta/ArticleMeta';
import { mergeInlineContent } from '../utils/articleContent';
import { getPayload } from './api/[section]/[id]/[title]';
import { OEmbedLoader } from '../utils/OEmbedLoader';

const metaTitle = 'Fixed ads';
const metaDescription =
    'Article page using a grid next to a fixed-width ads aside';

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

            <div className="articleProgressTrack">
                <section className={`app-main article ${styles.intro}`}>
                    <main>
                        <GridContainer attributes={['grid']}>
                            <GridContainer
                                attributes={['m-2', 'hide-lt-m', 'gap-1']}
                            />
                            <GridContainer
                                attributes={['xs-12', 's-12', 'm-10', 'gap-1']}
                            >
                                <GridContainer
                                    className={styles.content}
                                    attributes={['grid']}
                                >
                                    <GridContainer
                                        attributes={['xs-12', 'gap-bottom']}
                                    >
                                        <header>
                                            <ArticleMeta
                                                authors={props.authors}
                                                date={
                                                    props.formattedPublicationDate
                                                }
                                            />

                                            <h1>{props.article.title}</h1>
                                            <p className={articleStyles.intro}>
                                                {props.article.intro}
                                            </p>
                                        </header>
                                    </GridContainer>
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
                    </main>
                    <aside className="hide-lt-l">placeholder</aside>
                </section>
                <section className={`app-main article`}>
                    <main>
                        <GridContainer attributes={['grid']}>
                            <GridContainer
                                className="full-height"
                                attributes={['m-2', 'hide-lt-m', 'gap-2']}
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
                                        className={articleStyles.articleBody}
                                        attributes={['xs-12', 'gap-bottom']}
                                    >
                                        {jsxContent}
                                    </GridContainer>
                                </GridContainer>
                            </GridContainer>
                        </GridContainer>
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
