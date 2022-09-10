import {AppData, useAppData} from 'contexts';
import {Destination, Crew, Technology} from 'models';
import {useLocation} from 'react-router-dom';

export default function useCurrentEntity(): Destination | Crew | Technology {
  const data: AppData = useAppData();
  const {pathname} = useLocation();
  const [root, resource, key]: string[] = pathname.split('/');
  return data[resource].find((entity: Destination | Crew | Technology) => entity.slug === key);
}
