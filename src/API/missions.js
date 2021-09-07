import axios from 'axios';

export const GET_MISSIONS_REQUEST = 'GET_MISSIONS_REQUEST';
export const GET_MISSIONS_SUCCESS = 'GET_MISSIONS_SUCCESS';
export const GET_MISSIONS_FAILURE = 'GET_MISSIONS_FAILURE';

const getMissionsRequest = () => ({
  type: GET_MISSIONS_REQUEST,
});

const getMissionsSuccess = payload => ({
  type: GET_MISSIONS_SUCCESS,
  payload,
});

const getMissionsFailure = error => ({
  type: GET_MISSIONS_FAILURE,
  payload: error,
});

const getMissions = () => async dispatch => {
  dispatch(getMissionsRequest());

  axios.get('https://api.spacexdata.com/v3/missions', { mode: 'cors' })
    .then(response => {
      dispatch(getMissionsSuccess(response.data));
    })
    .catch(error => {
      dispatch(getMissionsFailure(error));
    });
};

export default getMissions;
