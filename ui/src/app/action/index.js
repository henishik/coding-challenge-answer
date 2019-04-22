import fetch from 'isomorphic-fetch';

export const RECIEVE_INITIAL_DATA = 'RECIEVE_INITIAL_DATA';
export const fetchInitialData = () => dispatch => {
    fetch('http://localhost:9980/reports/')
        .then(response => response.json())
        .then(json => {
            return (dispatch(
                {
                    type: RECIEVE_INITIAL_DATA,
                    data: json.reports
                }))
        })
};

export const BLOCK_REPORT = 'BLOCK_REPORT';
export const blockReport = (id) => dispatch => {
    fetch('http://localhost:9980/reports/' + id + '/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            reference_id: id,
            target_status: "BLOCK"
        }),
    })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: BLOCK_REPORT
            })

            dispatch(fetchInitialData())
        });
};

export const RESOLVE_REPORT = 'RESOLVE_REPORT';
export const resolveReport = (id) => dispatch => {
    fetch('http://localhost:9980/reports/' + id + '/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            reference_id: id,
            target_status: 'RESOLVE'
        }),
    })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: RESOLVE_REPORT
            })

            dispatch(fetchInitialData())
        });
};