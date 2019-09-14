import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

import CarmodelsPage from './views/CarmodelsPage'
import EmployeesPage from './views/EmployeesPage'
import UserPage from './views/UserPage'

import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact component={CarmodelsPage}/>
			<Route path="/employees" component={EmployeesPage}/>
			<Route path="/user" component={UserPage}/>
		</Router>
	);
}

export default App;
