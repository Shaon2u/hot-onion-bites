import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/useAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Navbar, Nav, Button, Image, Badge}  from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const auth = useAuth();
    const handleSignIn = () =>{
        auth.singInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })
    }
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        });
    }

    return (
            <Navbar bg="light" expand="lg" className="top-header">
                <Navbar.Brand inline> <img src={logo} alt="/" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link href="/shop">Menu</Nav.Link>
                        <Nav.Link href="/review">Review Order</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Navbar.Text>
                        <Button variant="outline-light" size="lg" href="/review" className="cart-icon-header">
                        <FontAwesomeIcon icon={faCartArrowDown}/>
                         <Badge variant="warning"> 10 </Badge>
                        <span className="sr-only"> </span>
                        </Button>
                    </Navbar.Text>
                    <Navbar.Text>
                    {
                        auth.user && <Image src={auth.user.photo} roundedCircle />
                    }
                    {
                        auth.user && <span style={{color:'#D21240'}}>Welcome, {auth.user.name}</span>
                    }
                    {
                        !auth.user &&
                        <Button variant="outline-success" size="lg" href="/login"> Sign Up </Button>
                    }
                    </Navbar.Text>
                    <Navbar.Text>
                    {
                        auth.user ?
                        <Button variant="success" onClick={handleSignOut}>Sign out</Button>
                        :
                        <GoogleButton onClick={handleSignIn}> Sign in </GoogleButton>
                    }
                    </Navbar.Text>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Header;