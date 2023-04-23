import React from 'react';
import Card from 'react-bootstrap/Card';


function Formations() {
    return (
        <section className="section">
             <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage</Card.Title>
                    <Card.Text><strong>Lieu : </strong> Marrakech
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> ARTECREA
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Juillet 2022 - Aout 2022
                    </Card.Text>
                    <Card.Text><strong>Mission : </strong> La réalisation d'une application Web qui joue le rôle d'intermédiaire entre les agences de location et les clients a l'aide de LARAVEL.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage</Card.Title>
                    <Card.Text><strong>Lieu : </strong> Rabat
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> INTELLCAP
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Juin 2021 - Aout 2021
                    </Card.Text>
                    <Card.Text><strong>Mission : </strong> La réalisation d'une application Web de gestion des stagiaires a l'aide de LARAVEL.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage</Card.Title>
                    <Card.Text><strong>Lieu : </strong> Tétouan 
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> l’Ecole Nationale des Sciences Appliquées
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Mai 2021 - Juin 2021
                    </Card.Text>
                    <Card.Text><strong>Mission : </strong> La conception et la réalisation d'une application web de gestion des demandes des attestations et des relevés de notes(les outils et langages utilisées : PHP(RedBeanphp),CSS(Bootstrap),HTML5,JavaScript)avec un aspects d'analyse de données a l'aide de SQL.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage de fin d’Etudes</Card.Title>
                    <Card.Text><strong>Lieu : </strong> Tétouan 
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> Université ABDELMALEK ESSAADI 
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> Mai 2019 - Juin 2019</Card.Text>
                    <Card.Text><strong>Mission : </strong> Conception et Réalisation d'une application d’édition des attestations a l'aide de PHP ,RedBeanphp,HTML5,CSS3,JavaScript,SQL.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className="my-4 mx-auto shadow" style={{ width: '60rem', textAlign: 'left' }}>
                <Card.Body>
                    <Card.Title>Stage d’observation</Card.Title>
                    <Card.Text><strong>Lieu : </strong> Settat
                    </Card.Text>
                    <Card.Text><strong>Nom de l'entreprise ou organisation : </strong> ONEP
                    </Card.Text>
                    <Card.Text><strong>Date : </strong> juillet 2018 - aout 2018
                    </Card.Text>

                </Card.Body>
            </Card>
           

        </section>
    );
}

export default Formations;