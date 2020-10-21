import React from 'react';
import Link from 'next/link';

function TopNav() {
    return (
        <nav className="app-menu dummy-element">
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/article">
                <a>Article</a>
            </Link>
            <Link href="/article2">
                <a>Article 2</a>
            </Link>
            <Link href="/article3">
                <a>Article 3</a>
            </Link>
            <Link href="/article4">
                <a>Article 4 (gridless)</a>
            </Link>
            <Link href="/test">
                <a>Test</a>
            </Link>
        </nav>
    );
}

export { TopNav };
