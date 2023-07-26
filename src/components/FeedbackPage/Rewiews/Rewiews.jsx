import React from 'react';
import { Section, Container, Title, Form, InputWrapper, Label, Input, Textarea, SubmitButton } from './Rewiews.styled'

const Reviews = () => {
  return (
    <Section>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
            {/* <Title>Тут ви можете залишити свій відгук</Title> */}
            <Title>Залишити відгук</Title>
        </div>
        <Form>
          <InputWrapper>
            <Label>Ім'я:</Label>
            <Input type="name" name="user_name" placeholder="Ім'я" />
          </InputWrapper>
          <InputWrapper>
            <Label>Емейл:</Label>
            <Input type="email" name="user_email" placeholder="Емейл" />
          </InputWrapper>
          <InputWrapper>
            <Label>Коментар:</Label>
            <Textarea placeholder="Залиште свій коментар"/>
          </InputWrapper>
          <SubmitButton type="submit">Надіслати</SubmitButton>
        </Form>
      </Container>
      <Container>
        <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
            <Title>Відгуки про нас</Title>
        </div>
        <div></div>
      </Container>
    </Section>
  );
};

export default Reviews;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addReview, fetchReviews, editReview, deleteReview } from '../../../redux/rewiews/reviewsOperations';
// import {
//   selectReviews,
//   selectReviewsLoading,
//   selectReviewsError,
// } from '../../../redux/rewiews/reviewsSelectors';

// const Reviews = () => {
//   const dispatch = useDispatch();
//   const reviews = useSelector(selectReviews);
//   const loading = useSelector(selectReviewsLoading);
//   const error = useSelector(selectReviewsError);
//   // State to handle form inputs
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [comment, setComment] = useState('');

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Dispatch the addReview async thunk
//     dispatch(addReview({ name, email, comment }));
//     // Clear the form inputs
//     setName('');
//     setEmail('');
//     setComment('');
//   };

//   const handleEdit = (reviewId) => {
//     // Find the review object that matches the reviewId
//     const reviewToEdit = reviews.find((review) => review._id === reviewId);
//     if (!reviewToEdit) {
//       // Handle the case if the review is not found
//       return;
//     }
//     // Update the form inputs with the review details
//     setName(reviewToEdit.name);
//     setEmail(reviewToEdit.email);
//     setComment(reviewToEdit.comment);
//     // Implement any other logic for editing the review if needed
//   };

//   // Event handler for deleting a review
//   const handleDelete = (reviewId) => {
//     // Implement the logic for deleting the review
//     // Dispatch the deleteReview async thunk to interact with the backend
//     dispatch(deleteReview(reviewId));
//   };

//   // Fetch reviews on component mount
//   useEffect(() => {
//     dispatch(fetchReviews());
//   }, [dispatch]);

//   return (
//     <div>
//       <h2>Reviews</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Comment:</label>
//           <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       <h3>Reviews List</h3>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {reviews.map((review) => (
//             <li key={review._id}>
//               <p>Name: {review.name}</p>
//               <p>Email: {review.email}</p>
//               <p>Comment: {review.comment}</p>
//               <button onClick={() => handleEdit(review._id)}>Edit</button>
//               <button onClick={() => handleDelete(review._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Reviews;