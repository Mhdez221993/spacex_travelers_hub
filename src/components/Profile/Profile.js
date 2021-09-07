import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Profile = () => (
  <div>
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>My Missions</th>
            <th>My Rockets</th>
            <th>{'  '}</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td><p>Telstar</p></td>
            <td><p>Falcon 9</p></td>
            <td />
          </tr>
          <tr>
            <td><p>SeS</p></td>
            <td><p>Falcon Heavy</p></td>
            <td />
          </tr>
          <tr>
            <td><p>AsiaSat</p></td>
            <td><p>missionDescription</p></td>
            <td />
          </tr>
          <tr>
            <td><p>Telstar</p></td>
            <td><p>missionDescription</p></td>
            <td />
          </tr>

        </tbody>
      </Table>
    </Container>
  </div>
);

export default Profile;
