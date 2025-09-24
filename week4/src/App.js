import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import LoginForm from './components/form';



function App() {
  return (
    <Router>
      <div>
        <nav style={{marginBottom:'20px'}}>
          <Link to='/' style={{margin:'0 10px'}}>Home</Link>
          <NavLink to='/about' style={({isActive})=>({margin:'0 10px', fontWeight:isActive?'bold':'normal'})}>About</NavLink>
          <Link to='/Contact' style={{margin:'0 10px'}}>Contact</Link>
          <Link to='/LoginForm' >Login</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='LoginForm' element={<LoginForm/>}/>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
