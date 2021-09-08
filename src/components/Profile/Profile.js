import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRockets } from '../../redux/rockets';
import getMissions from '../../API/missions';
import { fetchDragons } from '../../redux/dragons ';
import './profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ missions, rockets, dragons }) => [missions, rockets, dragons]);
  useEffect(() => {
    if (!store.length) {
      dispatch(loadRockets);
      dispatch(fetchDragons);
      dispatch(getMissions);
    }
  }, []);

  const [missions, rockets, dragons] = store;
  return (
    <div className="profile-holder">
      <div className="profile-item">
        <h2 className="profile-title">My Missios</h2>
        <div className="ul-profile">
          {missions.map(mission => (
            mission.reserved ? <div key={mission.id} className="li-profile">{mission.missionName}</div> : null
          ))}
        </div>
      </div>

      <div className="profile-item">
        <h2 className="profile-title">My Rockets</h2>
        <div className="ul-profile">
          {rockets.map(mission => (
            mission.reserved ? <div key={mission.id} className="li-profile">{mission.rocket_name}</div> : null
          ))}
        </div>
      </div>

      <div className="profile-item">
        <h2 className="profile-title">My Dragons</h2>
        <div className="ul-profile last-child">
          {dragons.map(mission => (
            mission.reserved ? <div key={mission.id} className="li-profile">{mission.name}</div> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
