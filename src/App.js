// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage'
// import Projects from './components/ProductsPage/Projects'
// import Header from './components/HomePage/Header/Header'
// // import Company from './components/AboutPage/index'

// function App() {
//   return (
//     // <div>
//     //   <HomePage />
//     //   <Route path="/products" component={Projects} />
//     // </div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Projects />} />
//         {/* <Route path="/services" element={} /> */}
//         {/* <Route path="/obl" element={} /> */}

//         {/* <Route path="/company" element={<Company />} >
//           <Route path="question" element={<Question />} />
//           <Route path="vacancies" element={<Vacancies />} />
//         </Route> */}
//         <Route path="/products" element={<Projects />} />
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Projects />} />
//       </Routes>
//   );
// }

// export default App;

import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import Projects from './components/ProductsPage/Projects'
// import Header from './components/HomePage/Header/Header'

const App = () => {
  return (
    <Suspense>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

export default App;
