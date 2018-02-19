import * as React from 'react';
import Teaser from "./Teaser";

export default class Page extends React.Component<any, any> {
    props: any;
    state: any;
    divRefs: Teaser[] = [];
    private debounceTime = 100;
    private debounceRef;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    debounce(fn) {
        if (this.debounceRef) {
            clearTimeout(this.debounceRef);
        }
        this.debounceRef = setTimeout(fn, this.debounceTime);
    }

    componentDidMount() {
        if (window) {
            window.addEventListener('resize', () => {
                this.calculateSize();
            });
            this.calculateSize();
        }
    }

    calculateSize() {
        for (const ref of this.divRefs) {
            ref.calculateSize();
        }
    }

    render() {
        return (
            <div key="grid" className="grid" {...this.props}>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-12 m-12 l-12 xl-12 gap-bottom"/>

                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom"/>

                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 xs-hide s-6 m-6 l-4 xl-4 gap-1 gap-2 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 xs-hide s-6 m-6 l-4 xl-4 gap-1 gap-2 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 xs-hide s-12 m-12 l-4 xl-4 gap-2 gap-bottom"/>

                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 xs-hide s-3 m-3 l-3 xl-3 gap-3 gap-bottom"/>

                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-12 m-12 l-12 xl-12 gap-bottom"/>

                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom"/>

                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom"/>

                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom"/>
                <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom"/>
                <div className="grid xs-12 s-3 m-3 l-3 xl-3 gap-3 gap-bottom">
                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-12 m-12 l-12 xl-12 gap-bottom"/>

                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom"/>
                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-6 m-6 l-6 xl-6 gap-1 gap-bottom"/>

                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom"/>
                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom"/>
                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-4 m-4 l-4 xl-4 gap-2 gap-bottom"/>

                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-3 m-3 l-3 xl-3 gap-3"/>
                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-3 m-3 l-3 xl-3 gap-3"/>
                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-3 m-3 l-3 xl-3 gap-3"/>
                    <Teaser ref={(ref) => { this.divRefs.push(ref); }} className="xs-12 s-3 m-3 l-3 xl-3 gap-3"/>
                </div>
            </div>
        );
    }
}
