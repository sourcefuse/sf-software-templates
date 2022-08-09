import {AuthenticationProvider, oidcLog} from '@axa-fr/react-oidc-context';
import oidcConfiguration from 'Configuration/configuration';
import PropTypes from 'prop-types';
import React from 'react';
// import {useIdleTimer} from 'react-idle-timer';

function AuthProvider({children}) {
  // const handleOnAction = (event) => {
  //   console.log('user did something', event);
  // };

  // const handleOnActive = (event) => {
  //   console.log('user is active', event);
  //   console.log('time remaining', getRemainingTime());
  // };

  // const handleOnIdle = (event) => {
  //   console.log('user is idle', event);
  //   console.log('last active', getLastActiveTime());
  // };

  // const {getRemainingTime, getLastActiveTime} = useIdleTimer({
  //   timeout: 1000 * 60 * 15,
  //   onIdle: handleOnIdle,
  //   onActive: handleOnActive,
  //   onAction: handleOnAction,
  //   debounce: 500,
  // });

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
    <AuthenticationProvider
      configuration={oidcConfiguration}
      loggerLevel={oidcLog.DEBUG}
      authenticating={Authentication}
      notAuthenticated={Unauthenticated}
      notAuthorized={Forbidden}
      sessionLostComponent={SessionLost}
    >
      {children}
    </AuthenticationProvider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
