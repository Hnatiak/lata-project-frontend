import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  ErrorText,
  Inputs,
  Menu,
  Container,
  PasswordInput,
  Content,
  RegisterBtn,
  StyledRegistrationLink,
  StyledLink,
} from './RegisterForm.styled';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Ім\'я обов\'язкове'),
  email: Yup.string().min(6, 'Емейл мусить бути більше 6-ти символів').email('Емейл неправильний').required('Емейл обов\'язковий'),
  password: Yup.string().min(8, 'Пароль мусить бути більше 8-ми цифр').required('Пароль обов\'язковий'),
});

function RegistrationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(register(newUser));

    if (response.error) {
      console.log("Щось пішло не так")
    } else {
      navigate('/');
      console.log("Ви успішно зареєструвалися")
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={RegisterSchema}>
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
              <Field autoFocus name="name" type="text" placeholder="Name" />
              <ErrorText name="name" component="div" />
              <Field name="email" type="email" placeholder="Email" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
              <Field name="password" type="password"
                //   type={showPassword ? 'text' : 'password'} 
                placeholder="Password" />
              <ErrorText name="password" component="div" />
                {/* <PasswordToggle
                  className={`${PasswordToggle} ${PasswordIcon}`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <PasswordIcon icon={faEyeSlash} width="18px" />
                  ) : (
                    <Svg>
                      <use stroke="gray" 
                    //   xlinkHref={`${sprite}#icon-eye`} 
                      />
                    </Svg>
                  )}
                </PasswordToggle> */}
              </PasswordInput>
              <RegisterBtn type="submit">Register Now</RegisterBtn>
            </Inputs>
          </Content>
        </Formik>
      </form>
    </Container>
  );
}

export default RegistrationPage;