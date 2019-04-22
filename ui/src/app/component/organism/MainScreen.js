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
                <h2>Report</h2>
                <ul>
                    {
                        this.props.reports.map((report) => {
                            return (
                                <div className="reports__box" style={{ display: "flex", height: 80 }}>
                                    <div className="reports__box__item__large">
                                        <div className="reports__box__row">id: {report['id']}</div>
                                        <div className="reports__box__row">
                                            state: <span className={"reports__box__status__" + report['state']}>
                                                {report['state']}
                                            </span>
                                        </div>
                                        <div className="reports__box__row"><a href="#" onClick={() => console.log("routing function")}>Details</a></div>
                                    </div>
                                    <div className="reports__box__item__large">
                                        <div className="reports__box__row">Type: {report['payload']['reportType']}</div>
                                        <div className="reports__box__row">Message: {report['payload']['message']}</div>
                                    </div>
                                    <div className="reports__box__item">
                                        <div className="reports__box__row">
                                            <button className="reports__box__item__button" onClick={() => {
                                                this.props.blockReport(report['id'])
                                                this.forceUpdate()
                                            }}>Block</button>
                                        </div>
                                        <div className="reports__box__row">
                                            <button className="reports__box__item__button" onClick={() => {
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
