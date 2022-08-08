import {useReactOidc} from '@axa-fr/react-oidc-context';
import React, {memo, useEffect} from 'react';

function WhoAmI() {
  const {oidcUser, events} = useReactOidc();
  const {profile} = oidcUser;
  // eslint-disable-next-line no-console
  const addUserEvent = (user) => console.log(`********* User Loaded :${user.profile} *********`);

  useEffect(() => {
    events.addUserLoaded(addUserEvent);
    return () => {
      events.removeUserLoaded(addUserEvent);
    };
  });

  /* eslint-disable */
  const PrettyPrintJson = memo(({data}: any) => (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  ));
  /* eslint-enable */

  return (
    <div>
      <PrettyPrintJson data={profile}></PrettyPrintJson>
    </div>
  );
}

export default WhoAmI;
