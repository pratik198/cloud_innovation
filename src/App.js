
// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // import HomePage from './Pages/HomePage';
// // // import LogIn from './Pages/LogIn';
// // // import MovieDetail from './Pages/MovieDetail';




// // // const App = () => (
// // //   <Router>
// // //     <Routes>
// // //       <Route path="/login" element={<LogIn />} />
// // //       <Route path="/movie/:id" element={<MovieDetail />} />
// // //       <Route path="/" element={<HomePage />} />
// // //     </Routes>
// // //   </Router>
// // // );

// // // export default App;

// // // src/App.js
// // import React, { useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { Routes, Route } from 'react-router-dom';
// // import { fetchMovies } from './Redux/MovieReducer/action';
// // // import MoviesList from './components/MoviesList';
// // import MoviesList from './Components/MovieList';
// // import HomePage from './Pages/HomePage';
// // import LogIn from './Pages/LogIn';
// // import MovieDetail from './Pages/MovieDetail';

// // const App = () => {
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     dispatch(fetchMovies());
// //   }, [dispatch]);

// //   return (
// //     <div>
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/login" element={<LogIn />} />
// //         <Route path="/movie/:id" element={<MovieDetail />} />
// //         <Route path="/movies" element={<MoviesList />} />
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default App;

// // src/App.js
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';

// import { fetchMovies } from './Redux/MovieReducer/action';
// import MoviesList from './Components/MovieList';
// import HomePage from './Pages/HomePage';
// import LogIn from './Pages/LogIn';
// import MovieDetail from './Pages/MovieDetail';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchMovies());
//   }, [dispatch]);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LogIn />} />
//         <Route path="/movie/:id" element={<MovieDetail />} />
//         <Route path="/movies" element={<MoviesList />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchMovies } from './Redux/MovieReducer/action';
import MoviesList from './Components/MovieList';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
import MovieDetail from './Pages/MovieDetail';
import MainRoutes from './Pages/MainRoutes';
import Header from './Components/Header';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies" element={<MoviesList />} />
      </Routes> */}
      <Header/>
<MainRoutes/>
    </div>
  );
};

export default App;
