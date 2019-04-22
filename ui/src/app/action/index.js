import fetch from 'isomorphic-fetch';

export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const resolveReport = () => dispatch => {
    dispatch({ type: SAMPLE_ACTION })
};