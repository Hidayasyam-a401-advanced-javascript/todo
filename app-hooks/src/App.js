import React from 'react';
import { Navbar} from 'react-bootstrap';
import ToDo from './components/todo-connected';

export default class App extends React.Component {
  render() {
    return (
      <>

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          {/* <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Navbar>

        



        <ToDo />
      </>
    );
  }
}