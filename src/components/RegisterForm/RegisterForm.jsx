import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Form, H2, Input, Label, Text } from './RegisterForm.styled';
import './RegisterForm.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <H2>You need to register</H2>
      <Label>
        <Text>Username</Text>
        <Input type="text" name="name" placeholder="Enter your name" />
      </Label>
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

      <button type="submit" className="btn__register btn">
        <span>Register</span>
      </button>
    </Form>
  );
};
