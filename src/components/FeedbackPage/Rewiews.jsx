import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  Form,
  InputWrapper,
  Label,
  Input,
  BtnSend,
  Textarea,
  SubmitButton,
  Review,
  Style,
  ErrorText,
} from './Reviews.styled';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Formik } from 'formik';

const ReviewSchema = Yup.object().shape({
  name: Yup.string().required('Ім\'я обов\'язкове'),
  email: Yup.string().min(6, 'Емейл мусить бути більше 6-ти символів').email('Емейл неправильний').required('Емейл обов\'язковий'),
  message: Yup.string().required('Коментар обов\'язковий'),
});

const Reviews = () => {
  const navigate = useNavigate();
  const isLoggedInUser = useSelector(state => state.auth.isLoggedIn);

  const handleRegisterRedirect = () => {
    if (!isLoggedInUser) {
      navigate('/auth/register');
      toast.error('Ви не можете залишити відгук поки не зареєструєтесь або не залогінетесь')
    }
  };

  const [reviews, setReviews] = useState([]);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      setReviews(response.data);
    } catch (error) {
      toast.error('Error fetching reviews:', error);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`/api/reviews/${id}`);
      fetchReviews(); // Refresh the reviews after deletion=
    } catch (error) {
      toast.error('Ви не можете видалити чужий відгук')
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await ReviewSchema.validate(values, { abortEarly: false });
      await axios.post('/api/reviews', values);
      setSubmitting(false);
      fetchReviews();
      toast.success('Ваш відгук був успішно доданий');
    } catch (error) {
      console.error('Під час додавання відгука сталася помилка:', error);
      toast.error('Під час додавання відгука сталася помилка');
    }
  };

  return (
    <>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
          <Title>Залишити відгук</Title>
        </div>
        <Formik initialValues={{ name: '', email: '', message: '' }} validationSchema={ReviewSchema} onSubmit={handleSubmit}>
          {({  handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <InputWrapper>
                  <Label>Ім'я:</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ім'я"
                  />
                </InputWrapper>
                <ErrorText name="name" component="div" className="error-message" />
              </div>
              <div>
                <InputWrapper>
                  <Label>Емейл:</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Емейл"
                  />
                </InputWrapper>
                <ErrorText name="email" component="div" className="error-message" />
              </div>
              <div>
                <InputWrapper>
                  <Label>Коментар:</Label>
                  <Textarea
                    name="message"
                    placeholder="Залиште свій коментар"
                    as="textarea"
                  />
                </InputWrapper>
                <ErrorText name="message" component="div" className="error-message" />
              </div>
              <SubmitButton type="submit" onClick={handleRegisterRedirect} disabled={isSubmitting}>Надіслати</SubmitButton>
            </Form>
          )}
        </Formik>
      </Container>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
          <Title>Відгуки про нас</Title>
        </div>
          <Style>
            {reviews.map((review, index) => (
              <Review key={index}>
                  <h2 style={{ margin: '0px' }}>Ім'я: {review.name}</h2>
                  <p style={{ margin: '0px' }}>Коментар: {review.comment || review.message}</p>
                  {isLoggedInUser && (
                    <BtnSend onClick={() => handleDeleteReview(review._id)}>Delete</BtnSend>
                  )}
              </Review>
            ))}
          </Style>
      </Container>
    </>
  );
};

export default Reviews;