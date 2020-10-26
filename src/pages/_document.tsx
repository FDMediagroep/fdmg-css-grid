import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class MyDocument extends Document<any> {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta property="og:site_name" content="FDMG CSS Grid" />

                    <meta property="og:type" content="article" />

                    <meta
                        property="og:image"
                        content="/assets/images/default-share.png"
                    />

                    <meta property="twitter:name" content="summary" />

                    <meta property="twitter:site" content="FDMG CSS Grid" />

                    <meta
                        property="twitter:image"
                        content="/assets/images/default-share.png"
                    />

                    <link
                        href="https://design-system.fd.nl/assets/fonts/style.css"
                        rel="stylesheet"
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `try {
    var query = window.matchMedia("(prefers-color-scheme: dark)");
    var preference = window.localStorage.getItem("theme");
    if (preference) {
        if ((preference === "system" && query.matches) || preference === "dark") {
            document.documentElement.style.backgroundColor = "#191919";
        } else {
            document.documentElement.style.backgroundColor = "#FFEADB";
        }
    }
} catch (e) {}`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
