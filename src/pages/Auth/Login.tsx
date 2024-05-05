import React from 'react';
import { Alert, Container, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import styles from './Login.module.scss';
import { useFormik } from 'formik';
import { RootState, useAppDispatch, useAppSelector } from '@/store';
import { LoadingButton } from '@mui/lab';
import { userLoginThunk } from '@/store/features/user/thunks';
import { useNavigate } from 'react-router-dom';

type LoginFormData = { username: string; password: string };

const validateForm = (values: LoginFormData): Partial<LoginFormData> => {
  const errors: Partial<LoginFormData> = {};

  if (!values.username) {
    errors.username = 'Username is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password is too short';
  }

  return errors;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggignIn = useAppSelector((state: RootState) => state.user.isLoggingIn);
  const loginError = useAppSelector((state) => state.user.loginError);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnMount: true,
    validate: validateForm,
    onSubmit: (values) => {
      dispatch(userLoginThunk(values))
        .unwrap()
        .then(() => {
          navigate('/home');
        })
        .catch(() => {
          console.log('BBBBBBBB fail');
        });
    },
  });

  return (
    <Container>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <FormControl className={styles.control}>
          <InputLabel htmlFor="username-input">Username</InputLabel>
          <Input
            name="username"
            value={formik.values.username}
            id="username-input"
            aria-describedby="my-helper-text"
            onChange={formik.handleChange}
          />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl className={styles.control}>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input
            name="password"
            value={formik.values.password}
            id="password-input"
            aria-describedby="my-helper-text"
            onChange={formik.handleChange}
          />
          <FormHelperText id="my-helper-text">8 characters long</FormHelperText>
        </FormControl>

        <LoadingButton
          type="submit"
          disabled={!formik.isValid}
          loading={isLoggignIn}
          sx={{ width: '100%' }}
          variant="contained"
        >
          Submit
        </LoadingButton>
      </form>

      {loginError && <Alert severity="error">{loginError}</Alert>}
    </Container>
  );
};

export default Login;
