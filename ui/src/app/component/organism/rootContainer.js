import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

class rootContainer extends Component {
    render() {
        return (
            <div className="rootContainer">
                <div className="rootContainer__sidebar">
                    <h1 className="rootContainer__sidebar__logo">DASHBOARD</h1>
                </div>
                <div className="rootContainer__main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(rootContainer);
