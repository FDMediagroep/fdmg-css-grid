import { ArticleMeta } from '@fdmg/design-system/components/article-meta/ArticleMeta';
import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {
    addProgressBar,
    removeProgressBar,
} from '../components/article/FDArticleProgressBar';
import { DOMParser } from '@xmldom/xmldom';

import { GridContainer } from '../components/GridContainer';
import { mergeInlineContent } from '../utils/articleContent';
import { OEmbedLoader } from '../utils/OEmbedLoader';
import { getPayload } from './api/[section]/[id]/[title]';
import styles from './article.module.scss';
import articleStyles from '../components/article/Article.module.scss';

const metaTitle = 'No ads';
const metaDescription = 'Article page without ads using a grid';

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
        const trackedElement = document.querySelector(
            '.articleProgressTrack'
        ) as HTMLElement;

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

            <section className={`app-main article articleProgressTrack`}>
                <main>
                    <GridContainer attributes={['grid']}>
                        <GridContainer
                            attributes={[
                                'm-1',
                                'hide-lt-m',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />
                        <GridContainer
                            attributes={[
                                'xs-12',
                                's-12',
                                'm-10',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        >
                            <GridContainer
                                className={styles.content}
                                attributes={['grid']}
                            >
                                <GridContainer
                                    attributes={['xs-12', 'gap-bottom']}
                                    style={{ height: '300px' }}
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
                        <GridContainer
                            attributes={[
                                'm-1',
                                'hide-lt-m',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />

                        <GridContainer
                            className="full-height"
                            attributes={['m-1', 'hide-lt-m', 'gap-1']}
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
                        <GridContainer
                            attributes={[
                                'm-1',
                                'hide-lt-m',
                                'gap-1',
                                'gap-2',
                                'gap-bottom',
                            ]}
                        />
                    </GridContainer>
                </main>
            </section>
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
