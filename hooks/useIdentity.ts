import { useEffect, useState } from 'react';
import * as netlifyIdentity from 'netlify-identity-widget';
import { Identity, IdentityState, User } from '@models/identity';

const idConfig = {};

export const useIdentity = (): Identity => {
  const [state, setState] = useState<IdentityState>({ loggedIn: false });

  useEffect(() => {
    netlifyIdentity.init(idConfig);
  }, []);

  const setUser = (user: User) => {
    setState({
      loggedIn: !!user,
      user: user as User,
    })
  };

  // Netlify events

  netlifyIdentity.on('init', user => setUser(user));
  netlifyIdentity.on('login', user => setUser(user));
  netlifyIdentity.on('logout', user => setUser(user));

  return {
    login: netlifyIdentity.open,
    logout: netlifyIdentity.logout,
    closeModal: netlifyIdentity.close,
    state,
  };
};
