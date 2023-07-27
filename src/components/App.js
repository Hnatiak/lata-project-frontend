import React, { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import Projects from '../pages/ProjectsPage'
import Services from '../pages/ServicesPage'
import Footer from './Footer/Footer';
import Equipment from '../pages/EquipmentPage'
import AboutPage from '../pages/AboutPage'
import Feedback from '../pages/FeedbackPage'

import Question from '../components/About/AboutUsMenu/Question'
import Vacancies from '../components/About/AboutUsMenu/Vacancies'

import News from '../pages/NewsPage'
import Articles from '../pages/ArticlesPage'
import Contacts from './ContactsPage/Contacts'
// import { AppContainer } from './App.styled'
import Header from './Header/Header'
import { refreshUser } from '../redux/auth/authOperations.js';
// import { isRefreshing, isLoggedIn } from '../redux/auth/authSelectors.js';
import NotFound from './NotFound/NotFound';
import { useDispatch } from 'react-redux';
import boxesData from './Projects/Content/boxs'
import ProductDetailsPage from './Projects/ProductDetailsPage/ProductDetailsPage';

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
            {/* <Route path="/projects/:photoId" component={ProductDetailsPage} /> */}
            <Route path="/projects/:photoId" element={<ProductDetailsPage photos={boxesData} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/obl" element={<Equipment />} />
            {/* <Route path="/company" element={<AboutPage />} >
              <Route path="questions" element={<Question />} />
              <Route path="vacancies" element={<Vacancies />} />
            </Route> */}
            <Route path="/company" element={<AboutPage />} />
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

