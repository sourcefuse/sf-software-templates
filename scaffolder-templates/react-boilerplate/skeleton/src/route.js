import {Route, Routes} from 'react-router-dom';
import {OidcSecure} from '@axa-fr/react-oidc-context';
import Landing from './components/Landing';
import PrivateRouteExample from './components/PrivateRouteExample';
import Demo from './components/Demo';
import WhoAmI from './components/WhoAmI';

const AppRoutes = () => (
  <Routes>
    <Route
      exact
      path="/"
      element={
        <OidcSecure>
          <Landing />
        </OidcSecure>
      }
    />
    <Route
      exact
      path="/private-route"
      element={
        <OidcSecure>
          <PrivateRouteExample />
        </OidcSecure>
      }
    />
    <Route
      exact
      path="/demo"
      element={
        <OidcSecure>
          <Demo />
        </OidcSecure>
      }
    />
    <Route
      exact
      path="/who-am-i"
      element={
        <OidcSecure>
          <WhoAmI />
        </OidcSecure>
      }
    />
  </Routes>
);

export default AppRoutes;
