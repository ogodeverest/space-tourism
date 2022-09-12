import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function useResourceClass() {
  const location = useLocation();
  const [root, resource] = location.pathname.split('/');

  useEffect(() => {
    document.body.classList.add(resource);

    return () => document.body.classList.remove(resource);
  }, [resource]);
}
