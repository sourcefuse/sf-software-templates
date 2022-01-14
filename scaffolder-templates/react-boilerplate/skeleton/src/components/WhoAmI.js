import React from 'react';
import {useReactOidc} from '@axa-fr/react-oidc-context';

function WhoAmI() {
  const {oidcUser, events} = useReactOidc();
  const {profile} = oidcUser;
  const addUserEvent = (user) => console.log(`********* User Loaded :${user.profile} *********`);

  React.useEffect(() => {
    events.addUserLoaded(addUserEvent);
    return () => {
      events.removeUserLoaded(addUserEvent);
    };
  });

  /* eslint-disable */
  const PrettyPrintJson = React.memo(({ data }) => (<div><pre>{
    JSON.stringify(data, null, 2) }</pre></div>))
  /* eslint-enable */

  return (
    <div>
      <PrettyPrintJson data={profile}></PrettyPrintJson>
    </div>
  );
}

export default WhoAmI;
