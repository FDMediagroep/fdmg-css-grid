import React from 'react';

export default class Teaser extends React.Component<any, any> {
    props: any;
    state: any;
    private ref: HTMLElement|null|undefined;

    constructor(props: any) {
        super(props);
        this.props = props;
        this.state = {
            width: -1,
            height: -1
        };
    }

    calculateSize() {
        if (this.ref) {
            this.setState({
                width: this.ref.clientWidth,
                height: this.ref.clientHeight
            });
        }
    }

    render() {
        return (
            <div ref={(ref) => { this.ref = ref; }} className={this.props.className} style={{background: 'rgba(0, 0, 0, 0.1)', padding: '1rem'}}>
                {this.state.width}x{this.state.height} - {this.props.className}
            </div>
        );
    }
}
