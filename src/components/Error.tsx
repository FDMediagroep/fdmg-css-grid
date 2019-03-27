import React from 'react';

export default class Error extends React.Component {
    state: any;
    props: any;

    constructor(props) {
        super (props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <div>Error</div>
            </div>
        );
    }
}
