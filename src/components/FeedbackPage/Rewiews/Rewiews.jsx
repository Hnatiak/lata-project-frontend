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
} from './Reviews.styled';
import { toast } from 'react-toastify';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/reviews', formData);
      setFormData({ name: '', email: '', comment: '' });
      fetchReviews();
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
          <Title>Залишити відгук</Title>
        </div>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Ім'я:</Label>
            <Input
              type="text"
              name="name"
              placeholder="Ім'я"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </InputWrapper>
          <InputWrapper>
           <Label>Емейл:</Label>
           <Input
            type="email"
            name="email"
            placeholder="Емейл"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Коментар:</Label>
          <Textarea
            placeholder="Залиште свій коментар"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          />
        </InputWrapper>
          <SubmitButton type="submit" onClick={handleRegisterRedirect}>
            Надіслати
          </SubmitButton>
        </Form>
      </Container>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
          <Title>Відгуки про нас</Title>
        </div>
          <Style>
            {reviews.map((review, index) => (
              <Review key={index}>
                  <h2 style={{ margin: '0px' }}>Ім'я: {review.name}</h2>
                  <p style={{ margin: '0px' }}>Коментар: {review.comment}</p>
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