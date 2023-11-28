import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />{' '}
          Репбаза 98
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="rules">Правила</Nav.Link>
            <Nav.Link href="/">Новости</Nav.Link>
          </Nav>
          <Nav className="justify-content:center">
            <Button href="booking">Записаться на репетицию</Button>
          </Nav>
          <Nav>
            <Nav.Link href="login">Вход</Nav.Link>
            <Nav.Link href="signup">Регистрация</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;