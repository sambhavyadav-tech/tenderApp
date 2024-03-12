// components/LoginForm.js
'use client'
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        // Simulate authentication (replace with actual authentication logic)
        if (username === 'admin' && password === 'admin') {
            router.push('/admin');
        } else if (username === 'user' && password === 'user') {
            router.push('/user');
        } else {
            // Display error message or redirect to an error page
            alert('Invalid credentials');
        }
    };

    return (
        <Form>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
                Login
            </Button>
        </Form>
    );  
};

export default LoginForm;
