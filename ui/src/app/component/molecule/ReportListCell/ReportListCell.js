import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ReportListCell = ({ report, onUpdateReportState}) => {
    return (
        <div key={report['reference_id']} className="reportListCell" style={{ display: "flex", height: 80 }}>
            <div className="reportListCell__item__large">
                <div className="reportListCell__row">id: {report['reference_id']}</div>
                <div className="reportListCell__row">
                    state: <span className={"reportListCell__status__" + report['status']}>
                        {report['status']}
                    </span>
                </div>
                <div className="reportListCell__row">
                    <a href="#" onClick={() => console.log("routing function")}>
                        Details
                    </a>
                </div>
            </div>

            <div className="reportListCell__item__large">
                <div className="reportListCell__row">Type: {report['report_type']}</div>
                <div className="reportListCell__row">Message: {report['message']}</div>
            </div>

            <div className="reportListCell__item">
                <div className="reportListCell__row">
                    <button className="reportListCell__item__button" onClick={() => {
                        onUpdateReportState(report['reference_id'], {
                            ticketState: "BLOCK"
                        })
                    }}>Block</button>
                </div>
                <div className="reportListCell__row">
                    <button className="reportListCell__item__button" onClick={() => {
                        onUpdateReportState(report['reference_id'], {
                            ticketState: "CLOSED"
                        })
                    }}>Resolve</button>
                </div>
            </div>
        </div>
    );
};

ReportListCell.propTypes = {
    report: PropTypes.object.isRequired,
    onUpdateReportState: PropTypes.func.isRequired
};

export default ReportListCell;
