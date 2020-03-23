import React, { useState } from 'react';
import Auth from './useAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import Join from './Join';

const Login = () => {

    // Sign In by Google Account Auth
    const auth = Auth();
    const handleSignIn = () => {
        auth.singInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })
    }

    return (
        <Container>
        <GoogleButton onClick={handleSignIn}> Sign In</GoogleButton>
        </Container>
    );
};

export default Login;