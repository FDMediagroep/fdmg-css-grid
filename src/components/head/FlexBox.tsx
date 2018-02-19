import * as React from 'react';

export default class Head extends React.Component<any, any> {
    props: any;
    state: any;

    constructor(props: any) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>FlexBox</title>
                <link rel="stylesheet" type="text/css" href="/css/flex.css"/>
            </head>
        );
    }
}
