import * as React from 'react';

export default class Nav extends React.Component<any, any> {
    props: any;
    state: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <nav className="main-menu">
                <a href="/">Grid</a>
                <a href="/2">FlexBox</a>
                <a href="/3">Grid /w FlexBox fallback</a>
            </nav>
        );
    }
}
