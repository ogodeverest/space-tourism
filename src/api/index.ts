import endpoints from './endpoints';
import {Crew, Destination, Technology} from 'models';

const fetchDestinations = (): Promise<Destination[]> => {
  return fetch(endpoints.api + 'destinations.json')
    .then(data => data.json())
    .then(data => data.destinations);
};

const fetchTechnologies = (): Promise<Technology[]> => {
  return fetch(endpoints.api + 'technologies.json')
    .then(data => data.json())
    .then(data => data.technology);
};

const fetchCrew = (): Promise<Crew[]> => {
  return fetch(endpoints.api + 'crew.json')
    .then(data => data.json())
    .then(data => data.crew);
};

export {fetchCrew, fetchTechnologies, fetchDestinations};
