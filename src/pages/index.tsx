import React from 'react';
import { Teaser } from '../components/Teaser';

export default function Page() {
    return (
        <>
            <div key="grid" className="grid">
                <Teaser className="xs-12 s-12 m-12 l-12 xl-12 gap-bottom" />

                <Teaser className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom" />
                <Teaser className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom" />

                <Teaser className="xs-12 xs-hide s-6 m-6 l-4 xl-4 gap-1 gap-2 gap-bottom" />
                <Teaser className="xs-12 xs-hide s-6 m-6 l-4 xl-4 gap-1 gap-2 gap-bottom" />
                <Teaser className="xs-12 xs-hide s-12 m-12 l-4 xl-4 gap-2 gap-bottom" />

                <Teaser className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom" />
                <Teaser className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom" />
                <Teaser className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom" />
                <Teaser className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom" />

                <Teaser className="xs-12 s-12 m-12 l-12 xl-12 gap-bottom" />

                <Teaser className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom" />
                <Teaser className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom" />

                <Teaser className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom" />
                <Teaser className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom" />
                <Teaser className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom" />

                <Teaser className="xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom" />
                <Teaser className="xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom" />
                <Teaser className="xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom" />
                <div className="grid xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom">
                    <Teaser className="xs-12 s-12 m-12 l-12 xl-12 gap-bottom" />

                    <Teaser className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom" />
                    <Teaser className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom" />

                    <Teaser className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom" />
                    <Teaser className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom" />
                    <Teaser className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom" />

                    <Teaser className="xs-12 s-3 m-3 l-3 xl-3 gap-3" />
                    <Teaser className="xs-12 s-3 m-3 l-3 xl-3 gap-3" />
                    <Teaser className="xs-12 s-3 m-3 l-3 xl-3 gap-3" />
                    <Teaser className="xs-12 s-3 m-3 l-3 xl-3 gap-3" />
                </div>
            </div>
        </>
    );
}
