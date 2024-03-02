import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Register from './Register';
import Login from './Login';
import Courses from './Courses';
import Students from './Students';
import Space from './Space';
import Protected from './Protected';

function App() {
  return (
    <>
        <div className="username-country-code-field puree-country-inline-drop">
            <div className="input-group">
                <input className="phone-no" type="text" name="username" id="login-username" value="" autoComplete="username"
                       autoCapitalize="none" autoCorrect="off" /*autoFocus="true"*/ />
                <label htmlFor="login-username" id="login-label" className="login-label">Username, email, or mobile</label>
            </div>
            {/*<div className="hidden-input-container">
                <input name="passwd" className="pwd-field" type="password" tabIndex="-1" aria-hidden="true"
                       role="presentation" autoCorrect="off" placeholder="Password" />
            </div>*/}
        </div>


      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/students' element={<Students />} />
          <Route path='/space' element={<Space />} />

          {/* <Route path='/user' 
            element={
              <Protected>
                <Courses />
              </Protected>
              Routes advanced
            } 
          /> */}
        </Routes>
      </Router>  
    </>
  );
}

export default App;
