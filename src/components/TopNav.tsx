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
        </nav>
    );
}

export { TopNav };
