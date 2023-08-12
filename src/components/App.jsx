import React, { useEffect } from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { refreshUser } from "../redux/auth/authOperations.js";
import boxesData from "./Projects/Content/boxs";
import servicesData from "./Service/ServiceElements/services";
import articlesData from "./Articles/ArticlesContent/articles";
import newsData from './News/NewsElements/newsElements'
import machenicsData from './Equipment/EquipmentContainer/machenics'

const ArticlesContent = lazy(() => import("./Articles/ArticlesContent/ArticlesContent"));
const HomePage = lazy(() => import("../pages/HomePage"));
const AuthPage = lazy(() => import("../pages/AuthPage"));
const Projects = lazy(() => import("../pages/ProjectsPage"));
const ProductDetailsPage = lazy(() => import("./Projects/ProductDetailsPage/ProductDetailsPage"));
const Services = lazy(() => import("../pages/ServicesPage"));
const ServiceElements = lazy(() => import("./Service/ServiceElements/ServiceElements"));
const Equipment = lazy(() => import("../pages/EquipmentPage"));
const EquipmentDetails = lazy(() => import("../components/Equipment/EquipmentDetails/EquipmentDetails"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const Question = lazy(() => import("./About/AboutUsMenu/Question"));
const Vacancies = lazy(() => import("./About/AboutUsMenu/Vacancies"));
const Feedback = lazy(() => import("../pages/FeedbackPage"));
const News = lazy(() => import("../pages/NewsPage"));
const NewElements = lazy(() => import("./News/NewsElements/NewElements"));
const Articles = lazy(() => import("../pages/ArticlesPage"));
const Contacts = lazy(() => import("../pages/ContactsPage/Contacts"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const BuyPage = lazy(() => import("../pages/BuyPage"))

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
          <Route path="/projects/:photoId" element={<ProductDetailsPage photos={boxesData} />} />
          <Route path="/projects/:photoId/buy" element={<BuyPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:link" element={<ServiceElements services={servicesData} />} />
          <Route path="/obl" element={<Equipment />} />
          <Route path="/obl/:photoId" element={<EquipmentDetails machenics={machenicsData} />} />
          <Route path="/company" element={<AboutPage />} />
          <Route path="/company/questions" element={<Question />} />
          <Route path="/company/vacancies" element={<Vacancies />} />
          <Route path="/reviews" element={<Feedback />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:link" element={<NewElements news={newsData} />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:link" element={<ArticlesContent articles={articlesData} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
