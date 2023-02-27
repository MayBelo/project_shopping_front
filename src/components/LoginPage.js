import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage({ login }) {
    function formlogin(e) {
        e.preventDefault()
        login(e.target.username.value, e.target.password.value)
    }
    return (
        <div>
        <h1>Please Login</h1>
        <Form onSubmit={formlogin}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Enter username</Form.Label>
                        <Form.Control name='username' placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput">Enter Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
        </Form>
        </div>
    );
}

export default LoginPage