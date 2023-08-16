import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import {
  ErrorText,
  Menu,
  Inputs,
  Container,
  PasswordInput,
  Content,
  LoginBtn,
  StyledRegistrationLink,
  StyledLink,
} from './LoginForm.styled';
import { setToken } from '../../redux/auth/authSelectors';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Емейл неправильний').required('Емейл обов\'язковий'),
  password: Yup.string().min(8, 'Пароль мусить бути більше 8 букв').required('Пароль обов\'язковий'),
});

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const currentUser = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(login(currentUser, setToken));

    if (response.error) {
      toast.error();
    } else {
      navigate('/');
      toast.success('Ви успішно залогінились')
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={LoginSchema} >
          <Content>
            <Menu>
                <StyledRegistrationLink href="register" underline="none">
                  Registration
                </StyledRegistrationLink>
                <StyledLink href="login" underline="none">
                  Log In
                </StyledLink>
            </Menu>
            <Inputs>
              <Field autoFocus name="email" type="email" placeholder="Email" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
                <Field type="password"
                  name="password"
                //   type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <ErrorText name="password" component="div" />

                {/* <PasswordToggle
                  className={`${PasswordToggle} ${PasswordIcon}`}
                //   onClick={togglePasswordVisibility}
                >
                  {/* {showPassword ? (
                    <PasswordIcon icon={faEyeSlash} width="18px" />
                  ) : (
                    <Svg>
                      <use
                        stroke="gray"
                        // xlinkHref={`${sprite}#icon-eye`}
                        style={{ color: '#737373' }}
                      />
                    </Svg>
                  )}
                </PasswordToggle> */}
              </PasswordInput>
              <LoginBtn type="submit">Log In Now</LoginBtn>
              <ErrorText name="submit" component="div" />
            </Inputs>
          </Content>
        </Formik>
      </form>
    </Container>
  );
}

export default LoginPage;