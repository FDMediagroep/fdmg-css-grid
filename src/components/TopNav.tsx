import React from 'react';
import Link from 'next/link';

function TopNav() {
    return (
        <nav className="app-menu dummy-element">
            <span>topnav</span>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/article">
                <a>Article</a>
            </Link>
        </nav>
    );
}

export { TopNav };
