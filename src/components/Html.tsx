import React from 'react';
import Nav from "./Nav";

export default class Html extends React.Component<any, any> {
    props: any;
    state: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <html>
                {this.props.head}
                <body>
                    <Nav key="nav"/>
                    <div id="root">{this.props.children}</div>
                    <script src="/js/main.js"/>
                </body>
            </html>
        );
    }
}
