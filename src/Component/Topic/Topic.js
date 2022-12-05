import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    
    const {id, logo, name, total} = topic;
    return (
        <section>
            <Card className='bg-secondary card-cons' style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={logo} />
                <Card.Body className='d-flex justify-content-around align-items-center p-3 bg-dark text-white'>
                    <div>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Questions: {total}</Card.Text>
                    </div>
                    <div><Link className="btn btn-primary" to={`/question/${id}`}>Start Quiz</Link> </div>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Topic;
