
export const RECEIVE_DRAGONS = 'RECEIVE_DRAGONS';
export const RECEIVE_DRAGON_RESERVE = 'RECEIVE_DRAGON_RESERVE';
export const RECEIVE_DRAGON_RESERVE_CANCELLATION = 'RECEIVE_DRAGON_RESERVE_CANCELLATION';

const initialState = { dragons: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DRAGONS: {
      return {
        dragons: action.dragons,
      };
    }