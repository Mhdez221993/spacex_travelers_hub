/* eslint-disable camelcase */
import axios from 'axios';

export const GET_MISSIONS_REQUEST = 'GET_MISSIONS_REQUEST';
export const GET_MISSIONS_SUCCESS = 'GET_MISSIONS_SUCCESS';
export const GET_MISSIONS_FAILURE = 'GET_MISSIONS_FAILURE';
export const JOIN_MISSION = 'JOIN_MISSION';
export const EXIT_MISSION = 'EXIT_MISSION';

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

export const joinMission = id => ({
  type: JOIN_MISSION,
  id,
});

export const exitMission = id => ({
  type: EXIT_MISSION,
  id,
});

const getMissions = () => async dispatch => {
  dispatch(getMissionsRequest());

  axios.get('https://api.spacexdata.com/v3/missions')
    .then(response => {
      const result = response.data.map(({
        mission_id, mission_name, description,
      }) => ({
        id: mission_id,
        missionName: mission_name,
        missionDescription: description,
      }));

      dispatch(getMissionsSuccess(result));
    })
    .catch(error => {
      dispatch(getMissionsFailure(error));
    });
};

export default getMissions;
