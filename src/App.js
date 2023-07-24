import React, { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import Projects from './components/ProjectsPage/Projects'
import Services from './components/ServicePage/Services'
import Footer from './components/Footer/Footer';
import Equipment from './components/EquipmentPage/Equipment'
import Company from './components/AboutPage/Сompany'
import Question from './components/AboutPage/AboutUsMenu/Question'
import Vacancies from './components/AboutPage/AboutUsMenu/Vacancies'
import Feedback from './components/FeedbackPage/Feedback'
import News from './components/NewsPage/News'
import Articles from './components/ArticlesPage/Articles'
import Contacts from './components/ContactsPage/Contacts'
import { AppContainer } from './App.styled'
import Header from './components/Header/Header'
import { refreshUser } from './redux/auth/authOperations.js';
import { isRefreshing, isLoggedIn } from './redux/auth/authSelectors.js';
import NotFound from './components/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';

const AuthPage = lazy(() => import('./pages/AuthPage'));

const App = () => {

  const dispatch = useDispatch();
  const refreshing = useSelector(isRefreshing);
  const loggedUser = useSelector(isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <AppContainer>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/obl" element={<Equipment />} />
          {/* <Route path="/company" element={<Company />} >
            <Route path="questions" element={<Question />} />
            <Route path="vacancies" element={<Vacancies />} />
          </Route> */}
          <Route path="/auth/:id" element={<AuthPage />} />
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
    </AppContainer>
  );
};

export default App;
