import React, { useEffect } from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SharedLayout } from "./SharedLayout/SharedLayout";

import { refreshUser } from "../redux/auth/authOperations.js";
import boxesData from "./Projects/Content/boxs";

// import HomePage from "../pages/HomePage";
// import Projects from "../pages/ProjectsPage";
// import Services from "../pages/ServicesPage";
// import Equipment from "../pages/EquipmentPage";
// import AboutPage from "../pages/AboutPage";
// import Feedback from "../pages/FeedbackPage";

// import Question from "../components/About/AboutUsMenu/Question";
// import Vacancies from "../components/About/AboutUsMenu/Vacancies";

// import News from "../pages/NewsPage";
// import Articles from "../pages/ArticlesPage";
// import Contacts from "../pages/ContactsPage/Contacts";
// import { AppContainer } from './App.styled'

// import { isRefreshing, isLoggedIn } from '../redux/auth/authSelectors.js';
// import NotFound from "../pages/NotFound/NotFound";

// import ProductDetailsPage from "./Projects/ProductDetailsPage/ProductDetailsPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const AuthPage = lazy(() => import("../pages/AuthPage"));
const Projects = lazy(() => import("../pages/ProjectsPage"));
const ProductDetailsPage = lazy(() =>
  import("./Projects/ProductDetailsPage/ProductDetailsPage")
);
const Services = lazy(() => import("../pages/ServicesPage"));
const Equipment = lazy(() => import("../pages/EquipmentPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const Question = lazy(() => import("./About/AboutUsMenu/Question"));
const Vacancies = lazy(() => import("./About/AboutUsMenu/Vacancies"));
const Feedback = lazy(() => import("../pages/FeedbackPage"));
const News = lazy(() => import("../pages/NewsPage"));
const Articles = lazy(() => import("../pages/ArticlesPage"));
const Contacts = lazy(() => import("../pages/ContactsPage/Contacts"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const App = () => {
  const dispatch = useDispatch();
  // const refreshing = useSelector(isRefreshing);
  // const loggedUser = useSelector(isLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/auth/:id" element={<AuthPage />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:photoId" component={ProductDetailsPage} /> */}
          <Route
            path="/projects/:photoId"
            element={<ProductDetailsPage photos={boxesData} />}
          />
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
        </Route>
      </Routes>
    </>
  );
};
