const configuration = {
  client_id: window._env_.client_id,
  redirect_uri: window._env_.redirect_uri,
  response_type: window._env_.response_type,
  post_logout_redirect_uri: window._env_.post_logout_redirect_uri,
  scope: window._env_.scope,
  authority: window._env_.authority,
  silent_redirect_uri: window._env_.silent_redirect_uri,
  automaticSilentRenew: window._env_.automatic_silent_renew,
  loadUserInfo: window._env_.load_user_info,
};

export default configuration;
