import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';

const Profile = () => (
  <div>
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><Badge bg="primary">My Missions</Badge></th>
            <th><Badge bg="primary">My Rockets</Badge></th>
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
            <td><p>Starship</p></td>
            <td />
          </tr>
          <tr>
            <td><p>ABS</p></td>
            <td />
            <td />
          </tr>

        </tbody>
      </Table>
    </Container>
  </div>
);

export default Profile;
