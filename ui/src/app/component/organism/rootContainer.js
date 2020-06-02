import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

class rootContainer extends Component {
    render() {
        return (
            <div className="rootContainer">
                <div className="rootContainer__sidebar">
                    <h1 className="rootContainer__sidebar__logo">Publicis People Cloud</h1>
                    <h3>CX-Loop</h3>
                    <h3>Growth Builder</h3>
                    <h3>POE-ES</h3>
                    <h3>ROI Optimizer</h3>
                    <h3>ROI Tracker</h3>
                    <h3>X-Cross</h3>
                    <h3>Audience Builder</h3>
                    <h3>Global Reporting</h3>
                    <h3>KPI Reporting</h3>
                </div>
                <div className="rootContainer__main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(rootContainer);
