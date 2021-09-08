import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRockets, setReservation, cancelReservation } from '../../redux/rockets';

import './rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(state => state.rocketsReducer);

  useEffect(
    () => {
      if (rockets.length === 0) dispatch(loadRockets());
    },
    [],
  );

  const handleReservation = (id, reserved) => {
    if (reserved) {
      dispatch(cancelReservation(id));
    } else {
      dispatch(setReservation(id));
    }
  };

  return (
    <div className="rocket-wrapper">
      <ul className="ul-rocket">
        {rockets.map(rocket => (
          <li key={rocket.id} className="li-rocket">
            <div className="img-rocket"><img src={rocket.img} alt="expacex rocket" /></div>
            <div className="rocket-info">
              <span className="rocket-name span">{rocket.rocket_name}</span>
              <span className="rocket-description span">{rocket.description}</span>
              <button
                onClick={() => handleReservation(rocket.id, rocket.reserved)}
                className={rocket.reserved ? 'reserved-rocket' : 'no-reserved-rocket'}
                type="button"
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocked'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
