import React, { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import Projects from './ProjectsPage/Projects'
import Services from './ServicePage/Services'
import Footer from './Footer/Footer';
import Equipment from './EquipmentPage/Equipment'
import Company from './AboutPage/Сompany'
import Question from './AboutPage/AboutUsMenu/Question'
import Vacancies from './AboutPage/AboutUsMenu/Vacancies'
import Feedback from './FeedbackPage/Feedback'
import News from './NewsPage/News'
import Articles from './ArticlesPage/Articles'
import Contacts from './ContactsPage/Contacts'
// import { AppContainer } from './App.styled'
import Header from './Header/Header'
import { refreshUser } from '../redux/auth/authOperations.js';
// import { isRefreshing, isLoggedIn } from '../redux/auth/authSelectors.js';
import NotFound from './NotFound/NotFound';
import { useDispatch } from 'react-redux';

const AuthPage = lazy(() => import('../pages/AuthPage'));

export const App = () => {

  const dispatch = useDispatch();
  // const refreshing = useSelector(isRefreshing);
  // const loggedUser = useSelector(isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/:id" element={<AuthPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/obl" element={<Equipment />} />
            {/* <Route path="/company" element={<Company />} >
              <Route path="questions" element={<Question />} />
              <Route path="vacancies" element={<Vacancies />} />
            </Route> */}
            <Route path="/company" element={<Company />} />
            <Route path="/company/questions" element={<Question />} />
            <Route path="/company/vacancies" element={<Vacancies />} />
            <Route path="/reviews" element={<Feedback />} />
            <Route path="/news" element={<News />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

