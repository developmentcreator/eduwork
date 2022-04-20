import React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <h3>Login</h3>
            <Form>
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" />
                    <FormControl.Feedback type="invalid">
                        Please enter a valid email address.
                    </FormControl.Feedback>
                </FormGroup>
                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Login;