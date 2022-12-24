import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget.jsx"
import logo from '../../img/DG_Logo.svg'
import './Navbar.css'
import { useCartContext } from '../../context/CartContext.jsx';

const Navbar2 = () => {
    const {totalQuantity} = useCartContext()
    return (
        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Link to='/' className={({isActive})=> isActive ? 'bg-red'  : ''}><img src={logo} className="logo" alt="DG logo" /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/categoria/Tortas'>Tortas</Link>
                    <Link to='/categoria/Budines'>Budines</Link>                 
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Carrito</Nav.Link>
                    <Link to="/cart">
                        {totalQuantity() !== 0 && totalQuantity()}
                        <CartWidget />
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default Navbar2