import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Form, H2, Input, Label, Text } from './LoginForm.styled';
import './LoginForm.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <H2>You need to logIn</H2>
      <Label>
        <Text>Email</Text>
        <Input type="email" name="email" placeholder="Enter your e-mail" />
      </Label>
      <Label>
        <Text>Password</Text>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </Label>

      <button type="submit" className="btn__login btn">
        <span>Log In</span>
      </button>
    </Form>
  );
};
