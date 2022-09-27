import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import logo from '../../public/img/StarWars.png'
import { Route, Routes, link } from 'react-router-dom';
import Personajes from './Personajes';

function Menu() {
  return (
    <>
      <Navbar bg="transparent" variant="primary">
        <Container>
          <Navbar.Brand href="#">
            <Image src={logo} width={90} height={50} alt="No encopntrada" />
          </Navbar.Brand>
          <Nav >
            {/* <Routes>
              <Route path='' element={<index />} />
              <Route path='/personajes' element={<Personajes />} />
            </Routes> */}
             <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="./personajes">Personajes</Nav.Link>
            <Nav.Link href="#">Contactenos</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
         
    </>
  );
}

export default Menu;