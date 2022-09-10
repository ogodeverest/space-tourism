import React, {createContext, ReactNode, useContext} from 'react';
import {Crew, Technology, Destination} from 'models';
import {fetchCrew, fetchTechnologies, fetchDestinations} from 'api';
import {wrapPromise} from 'utils';

export type AppData = {
  destinations: Destination[];
  crew: Crew[];
  technologies: Technology[];
  [key: string]: any;
};

const AppContext = createContext<AppData>({
  destinations: [],
  crew: [],
  technologies: [],
});

type Props = {
  children: ReactNode;
};

const resource = wrapPromise(
  Promise.all([fetchCrew(), fetchTechnologies(), fetchDestinations()]).then(
    (data: [Crew[], Technology[], Destination[]]): AppData => ({
      crew: data[0],
      technologies: data[1],
      destinations: data[2],
    }),
  ),
);

const AppProvider = ({children}: Props) => {
  const data: AppData = resource.read();

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useAppData = () => useContext(AppContext);

export default AppProvider;
