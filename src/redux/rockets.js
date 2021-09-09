/* eslint-disable camelcase */
import getRokects from '../API/rockets';

const SET_ROCKETS = 'rocketStore/rockets/SET_ROCKETS';
const SET_RESERVATION = 'rocketStore/rockets/SET_RESERVATION';
const CANLCEL_RESERVATION = 'rocketStore/rockets/CANLCEL_RESERVATION';
const initialState = [];

const setRockets = payload => ({
  type: SET_ROCKETS,
  payload,
});

export const setReservation = payload => ({
  type: SET_RESERVATION,
  payload,
});

export const cancelReservation = payload => ({
  type: CANLCEL_RESERVATION,
  payload,
});

export const loadRockets = () => async dispatch => {
  const rockets = await getRokects();
  if (rockets) {
    dispatch(setRockets(rockets));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS: {
      const saved = Object.entries(action.payload).map(([id, rocket]) => {
        const { description, rocket_name, flickr_images: [img] } = rocket;
        return {
          id,
          description,
          rocket_name,
          img,
        };
      });
      return state.concat(saved);
    }
    case SET_RESERVATION:
      return state.map(rocket => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: true,
        };
      });
    case CANLCEL_RESERVATION:
      return state.map(rocket => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;
