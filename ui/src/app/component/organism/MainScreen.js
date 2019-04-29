import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReportListCell from '../molecule/ReportListCell'
import { connect } from 'react-redux';
import { fetchInitialData, updateReportState } from '../../action';

const mapStateToProps = state => {
    return {
        reports: state.reports
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchInitialData: () => dispatch(fetchInitialData()),
    updateReportState: (id, payload) => dispatch(updateReportState(id, payload))
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
            <div className="reports">
                <h2>Report</h2>
                <ul>
                    {this.props.reports.map((report) => {
                        return <ReportListCell
                            key={report['reference_id']}
                            report={report}
                            onUpdateReportState={(id, payload) => {
                                this.props.updateReportState(id, payload)
                            }}
                            />
                    })}
                </ul>
            </div>
        );
    }
}

Main.propTypes = {
    fetchInitialData: PropTypes.func,
    updateReportState: PropTypes.func,
    reports: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
