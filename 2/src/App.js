import Form from './form';
import './App.css';

function App() {
  return (
    <div className={'login-wrapper'}>
      <h1 className={'logo'}>Stackfindover</h1>
      <div className={'login'}>
        <div className={'login-contents'}>
          <h2 className={'login-text'}>Sign in to your account</h2>
          <Form />
          <a href="https://maps.google.com" className={'google-sign-in'}>Use single sign-on (Google) instead</a>
        </div>
      </div>
      <p className={'sign-up'}>
        Don't have an account? <a href="https://facebook.com">Sign up</a>
      </p>
    </div>
  );
}

export default App;
