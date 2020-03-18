import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.replace("/login");
        }
    }

    componentDidUpdate() {
        if (!this.props.authenticated) {
            this.props.history.replace("/login");
        }
    }

    render() {
        return (
            <div>
                <h3>Hello World</h3>
            </div>
        );
    }
}

export default withRouter(Home);