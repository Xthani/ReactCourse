import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/page_body/menu/menu';
import Messages from './components/page_body/messages/messages.jsx';
import Profile from './components/page_body/profile/profile.jsx';

function App(props) {

  return (
    <div className="container">
      <Header />
      <div className='page_body'>
        <Menu />
        <div className='content'>
          <Routes>
            <Route path="/profile/*"
              element={<Profile
                store={props}
              // state={props.state.published}
              // dispatch с функциями
              // dispatch={props.dispatch}
              />}
            />
            <Route path="/messages/*"
              element={<Messages
                // store={props.store}
                state={props.state.dialogs}
                // dispatch с функциями
                dispatch={props.dispatch}
              />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
