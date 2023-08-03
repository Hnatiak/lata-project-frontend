import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Container>
      <Header />
      <main>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};
