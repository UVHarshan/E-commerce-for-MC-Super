import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScren';
import ProductScreen from "./screens/ProductScreen";
import { Navbar, Container, } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header >
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand> amazona </Navbar.Brand>
              </LinkContainer>

            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'> All Rights Reserved </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
