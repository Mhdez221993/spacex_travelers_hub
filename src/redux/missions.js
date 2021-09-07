import {
  GET_MISSIONS_REQUEST,
  GET_MISSIONS_SUCCESS,
  GET_MISSIONS_FAILURE,
} from '../API/missions';

const initialState = {
  isLoading: false,
  missions: [],
  error: '',
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_MISSIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        missions: action.payload,
      };

    case GET_MISSIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default missionsReducer;
