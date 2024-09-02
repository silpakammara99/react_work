import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CustomeCards(props) {
  const {title,text,source}=props
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={source}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">click here</Button> 
      </Card.Body>
    </Card>
  );
}

export default CustomeCards;