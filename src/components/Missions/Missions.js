import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button';
import getMissions from '../../API/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(({ missionsReducer }) => missionsReducer.missions);

  useEffect(() => {
    (async () => {
      await dispatch(getMissions());
    })();
  }, []);

  return (
    <container>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {
            missions && missions.map(mission => (
              <tr key={mission.id}>
                <td>
                  {mission.mission_name}
                </td>
                <td>
                  {mission.description}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </container>
  );
};

export default Missions;
