import './App.css';
import oidcConfiguration from './configuration/configuration';
import {BrowserRouter} from 'react-router-dom';
import {AuthenticationProvider, oidcLog} from '@axa-fr/react-oidc-context';
import Dashboard from './components/Dashboard';
import {useIdleTimer} from 'react-idle-timer';

function App() {
  const handleOnAction = (event) => {
    console.log('user did something', event);
  };

  const handleOnActive = (event) => {
    console.log('user is active', event);
    console.log('time remaining', getRemainingTime());
  };

  const handleOnIdle = (event) => {
    console.log('user is idle', event);
    console.log('last active', getLastActiveTime());
  };

  const {getRemainingTime, getLastActiveTime} = useIdleTimer({
    timeout: 1000 * 60 * 15,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });

  const Authentication = () => {
    return (
      <div>
        <h1>Authenticating</h1>
      </div>
    );
  };

  const Unauthenticated = () => {
    return (
      <div>
        <h1>Not Authenticated</h1>
      </div>
    );
  };

  const Forbidden = () => {
    return (
      <div>
        <h1>Forbidden</h1>
      </div>
    );
  };

  const SessionLost = () => {
    return (
      <div>
        <h1>SessionLost</h1>
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <AuthenticationProvider
          configuration={oidcConfiguration}
          loggerLevel={oidcLog.DEBUG}
          authenticating={Authentication}
          notAuthenticated={Unauthenticated}
          notAuthorized={Forbidden}
          sessionLostComponent={SessionLost}
        >
          <Dashboard />
        </AuthenticationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
