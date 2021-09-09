import {
  GET_MISSIONS_SUCCESS,
  JOIN_MISSION,
  EXIT_MISSION,
} from '../API/missions';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS_SUCCESS:
      return action.payload;

    case JOIN_MISSION:
      return state.map(mission => {
        if (mission.id !== action.id) {
          return mission;
        }

        return {
          ...mission,
          reserved: true,
        };
      });

    case EXIT_MISSION:
      return state.map(mission => {
        if (mission.id !== action.id) {
          return mission;
        }

        return {
          ...mission,
          reserved: false,
        };
      });

    default:
      return state;
  }
};

export default missionsReducer;
