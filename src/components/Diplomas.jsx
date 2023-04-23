import React from 'react';
import Card from 'react-bootstrap/Card';

function Formations() {
  return (
    <section className="section">
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>Elève ingénieur en 4éme année d'Ingénierie informatique et réseau(4IIR)</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">EMSI</Card.Subtitle>
          <Card.Text>2021 - en cours
          </Card.Text>

        </Card.Body>
      </Card>

      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>Brevet des techniciens supérieur</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Centre de classes de préparation du brevet de technicien supérieur(BTS)</Card.Subtitle>
          <Card.Text>2017 - 2019
          </Card.Text>

        </Card.Body>
      </Card>
      <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
        <Card.Body>
          <Card.Title>Baccalauréat sciences et technologies électriques</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> Lycée technique</Card.Subtitle>
          <Card.Text>2017
          </Card.Text>

        </Card.Body>
      </Card>
    </section>
  );
}

export default Formations;