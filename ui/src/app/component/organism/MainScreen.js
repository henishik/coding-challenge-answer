import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        return (
            <div className="MainScreen">
                <h2>MainScreen</h2>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
