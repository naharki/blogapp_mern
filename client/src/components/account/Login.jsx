import { Box, Button, TextField, Typography } from '@mui/material';
import { API } from '../../service/api.js';
import styled from '@emotion/styled';
import { useState } from 'react';

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 /0.6);
`;
const Image = styled('img')({
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0',
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

const signupInitialValues = {
  name: '',
  username: '',
  password: '',
};

const Login = () => {
  const imageURL =
    'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  const [account, toggleAccount] = useState('login');
  const [signup, setsignup] = useState(signupInitialValues);

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };

  const onInputChange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser =async () => {
  let response = await  API.userSignup(signup);
  }
   
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="LogoImage" />
        {account === 'login' ? (
          <Wrapper>
            <TextField variant="standard" label="Enter user name" />
            <TextField variant="standard" label="Enter password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: 'center' }}> OR </Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter user name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter password"
            />
            <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
            <Text style={{ textAlign: 'center' }}> OR </Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};
export default Login;
