import api from '../../api/api';

const ADD_RESERVATION = 'ADD_RESERVATION';
const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
const RECEIVE_ROCKETS = 'RECEIVE_ROCKETS';
const RECEIVE_DRAGONS = 'RECEIVE_DRAGONS';
const RECEIVE_MISSIONS = 'RECEIVE_MISSIONS';
const RECEIVE_ROCKET_RESERVE = 'RECEIVE_ROCKET_RESERVE';
const RECEIVE_DRAGON_RESERVE = 'RECEIVE_DRAGON_RESERVE';
const RECEIVE_MISSION_RESERVE = 'RECEIVE_MISSION_RESERVE';
const RECEIVE_ROCKET_RESERVE_CANCELLATION = 'RECEIVE_ROCKET_RESERVE_CANCELLATION';
const RECEIVE_DRAGON_RESERVE_CANCELLATION = 'RECEIVE_DRAGON_RESERVE_CANCELLATION';
const RECEIVE_MISSION_RESERVE_CANCELLATION = 'RECEIVE_MISSION_RESERVE_CANCELLATION';

export const receiveDragons = (dragons) => ({
 type: RECEIVE_DRAGONS,
 dragons,
});

export const getDragons = () => (dispatch) => {
 api.getDragons().then((dragons) => {
   dispatch(receiveDragons(dragons));
   return dragons;
 });
};

export const receiveReservations = (reservations) => ({
 type: RECEIVE_RESERVATIONS,
 reservations,
});

export const getReservations = (reservation) => (dispatch) => {
 dispatch(receiveReservations(reservation));
};

export const removeReserve = (reservation) => ({
 type: REMOVE_RESERVATION,
 reservation,
});

export const addReserve = (reservation) => ({
 type: ADD_RESERVATION,
 reservation,
});

export const receiveDragonReserve = (reservation) => ({
 type: RECEIVE_DRAGON_RESERVE,
 reservation,
});

export const receiveDragonReserveCancellation = (reservation) => ({
 type: RECEIVE_DRAGON_RESERVE_CANCELLATION,
 reservation,
});

export const addReservation = (reservation) => (dispatch) => {
 dispatch(addReserve(reservation));
 const { target } = reservation;
 if (target === 'dragons') {
   dispatch(receiveRocketReserve(reservation));
 }
};

export const removeReservation = (reservation) => (dispatch) => {
 dispatch(removeReserve(reservation));
 dispatch(receiveRocketReserveCancellation(reservation));

 const { target } = reservation;
 if (target === 'dragons') {
   dispatch(receiveRocketReserveCancellation(reservation));
 }
}