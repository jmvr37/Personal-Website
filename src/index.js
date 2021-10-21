import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <>
  <Navigation />
  <Header />
  <Profile />
  <Skills />
  <Projects />
  <Footer />

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
