import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import User from './components/features/Login/User';

function App() {
  return (
    <Router>
    <div className="container">
    

    <div className="btn-group"> 
    <Link to="/" className="btn">Inicio</Link>
    <Link to="/Nosotros" className="btn">Nosotros</Link>
    <Link to="/Contacto" className="btn">Contacto</Link>
    </div>
     <hr/>
     <Switch>
     <Route path="/nosotros/:id">
        <User/>
      </Route>
      <Route path="/contacto">
        <Contacto/>
      </Route>
      <Route path="/nosotros">
        <Nosotros/>
      </Route>
      <Route path="/">
        <Inicio/>
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
