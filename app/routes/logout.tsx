import { usePuterStore } from '~/lib/puter';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Logout = () => {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      auth.signOut();
    }
    navigate('/');
  }, [auth, navigate]);

  return null;
};

export default Logout;
