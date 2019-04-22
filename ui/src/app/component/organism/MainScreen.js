import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInitialData, blockReport, resolveReport } from '../../action';

const mapStateToProps = state => {
    return {
        reports: state.reports
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchInitialData: () => dispatch(fetchInitialData()),
    blockReport: (id) => dispatch(blockReport(id)),
    resolveReport: (id) => dispatch(resolveReport(id))
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
                <h2>REPORTS (OPEN)</h2>
                <ul>
                    {
                        this.props.reports.map((report) => {
                            return (
                                <div className="reports_box" style={{ display: "flex", height: 80 }}>
                                    <div>
                                        <div>id: {report['id']}</div>
                                        <div>state: {report['state']}</div>
                                        <div>Details</div>
                                    </div>
                                    <div>
                                        <div>Type: Spam</div>
                                        <div>Message: Some Messages ...</div>
                                    </div>
                                    <div>
                                        <div>
                                            <button onClick={() => {
                                                this.props.blockReport(report['id'])
                                                this.forceUpdate()
                                            }}>Block</button>
                                        </div>
                                        <div>
                                            <button onClick={() => {
                                                this.props.resolveReport(report['id'])
                                                this.forceUpdate()
                                            }}>Resolve</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
