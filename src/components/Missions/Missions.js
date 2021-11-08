/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Button, Badge, Table,
} from 'react-bootstrap';
import getMissions, {
  joinMission,
  exitMission,
} from '../../API/missions';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(({ missions }) => missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div>
      <Container className="bg-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{'  '}</th>
            </tr>
          </thead>
          <tbody>

            {missions && missions.length > 0 && missions.map(({
              id,
              missionName,
              missionDescription,
              reserved,
            }) => (
              <tr key={id}>
                <td><p className="fw-bold">{missionName}</p></td>
                <td><p>{missionDescription}</p></td>
                <td className="align-middle">
                  {reserved && <Badge bg="info">ACTIVE MEMBER</Badge>}
                  {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
                </td>
                <td className="col-2 align-middle text-center">
                  {reserved
                  && (
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => dispatch(exitMission(id))}
                  >
                    Leave Mission
                  </Button>
                  )}
                  {!reserved
                  && (
                  <Button
                    size="sm"
                    variant="outline-success"
                    onClick={() => dispatch(joinMission(id))}
                  >
                    Join Mission
                  </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Missions;
