import { React, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import Spinner from './Spinner';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checking, setIsChecking] = useState(false);

  return (
    <div className="App">
      {checking ? (
        <Spinner />
      ) : loggedIn ? (
        <MainPage
          setChecking={() => setIsChecking((prev) => !prev)}
          setLogin={() => setLoggedIn((prev) => !prev)}
        />
      ) : (
        <LoginPage
          setChecking={() => setIsChecking((prev) => !prev)}
          setLogin={() => setLoggedIn((prev) => !prev)}
        />
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default App;
