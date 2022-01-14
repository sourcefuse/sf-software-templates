import React from 'react';
function PrivateRouteExample() {
  return (
    <div>
      <h2>Private Route Example</h2>
      <pre>
        {`
import React from 'react';
import {Route, Routes} from "react-router-dom";
import {OidcSecure} from '@axa-fr/react-oidc-context';
import Landing from "./components/Landing";
import PrivateRouteExample from "./components/PrivateRouteExample";
import Demo from "./components/Demo";

const AppRoutes = () => (
    <Routes>
        <Route exact path="/" element={<OidcSecure><Landing /></OidcSecure>} />
        <Route exact path="/private-route" element={<OidcSecure><PrivateRouteExample /></OidcSecure>} />
        <Route exact path="/demo" element={<OidcSecure><Demo /></OidcSecure>} />
    </Routes>
);

export default AppRoutes;`}
      </pre>
    </div>
  );
}

export default PrivateRouteExample;
