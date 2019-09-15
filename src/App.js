
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {AuthProvider} from './components/Auth'
import Navbar from './components/Navbar'
import UserLoginDialog from './components/User/UserLoginDialog'
import UserRegisterDialog from './components/User/UserRegisterDialog'

import WelcomePage from './views/WelcomePage'
import CarmodelsPage from './views/CarmodelsPage'
import EmployeesPage from './views/EmployeesPage'
import UserPage from './views/UserPage'

import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Navbar title="CAR DEALER" />
				<Route path="/" exact component={WelcomePage}/>
				<Route path="/carmodels" component={CarmodelsPage}/>
				<Route path="/employees" component={EmployeesPage}/>
				<Route path="/user" component={UserPage}/>
				<Route path="/login" component={UserLoginDialog}/>
				<Route path="/register" component={UserRegisterDialog}/>
			</Router>
		</AuthProvider>
	);
}

export default App;
