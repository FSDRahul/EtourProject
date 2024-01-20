import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchDropdown from '../Component/SearchDropdown';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ETOUR GROUP-7</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/login">Home</Nav.Link> */}
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/registration">Register</Nav.Link>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
          
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Search" id="basic-nav-dropdown" >
              <SearchDropdown/>
          
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;