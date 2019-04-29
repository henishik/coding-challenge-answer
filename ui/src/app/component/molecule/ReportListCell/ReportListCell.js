import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

const ReportListCell = ({ report, onUpdateReportState}) => {
    return (
        <div key={report['reference_id']} className="reports__box" style={{ display: "flex", height: 80 }}>
            <div className="reports__box__item__large">
                <div className="reports__box__row">id: {report['reference_id']}</div>
                <div className="reports__box__row">
                    state: <span className={"reports__box__status__" + report['status']}>
                        {report['status']}
                    </span>
                </div>
                <div className="reports__box__row"><a href="#" onClick={() => console.log("routing function")}>Details</a></div>
            </div>
            <div className="reports__box__item__large">
                <div className="reports__box__row">Type: {report['report_type']}</div>
                <div className="reports__box__row">Message: {report['message']}</div>
            </div>
            <div className="reports__box__item">
                <div className="reports__box__row">
                    <button className="reports__box__item__button" onClick={() => {
                        onUpdateReportState(report['reference_id'], {
                            ticketState: "BLOCK"
                        })
                    }}>Block</button>
                </div>
                <div className="reports__box__row">
                    <button className="reports__box__item__button" onClick={() => {
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
