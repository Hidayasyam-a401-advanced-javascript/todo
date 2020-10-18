import React from 'react'
import './todo.scss';

import { ListGroup } from 'react-bootstrap';
const ToDoList = (props) => {
  return (
    <ListGroup className="ListGroup" variant="flush">
      {props.list.map(item => (
        <ListGroup.Item className={`listGroupItem complete-${item.complete.toString()}`}
          key={item._id} >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
export default ToDoList;


{/* <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup> */}