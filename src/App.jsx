import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Services from './pages/Services';
import './App.css';
import MainNavagetion from './components/MainNavagetion';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop'

function App() {
	

	return (
		<div className='bg-black min-h-screen font-sans'>
			<MainNavagetion />
      <ScrollToTop />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/resources'
					element={<Resources />}
				/>
				<Route
					path='/services'
					element={<Services />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/xquisite'
					element={<CaseStudy />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
