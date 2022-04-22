import { createContext, useContext, useState, useEffect } from 'react';
import dataSlugs from '../dataSlugs';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [showFullSizePicture, setFullSizePicture] = useState({});
  const [componentsVisibility, setComponentsVisibility] = useState(false);
  const [newCollection, setNewCollection] = useState([]);
  const [nextPictures, setNextPictures] = useState(dataSlugs);

  const getNextPictures = (newCollectionToShow) => {
    setNextPictures(newCollectionToShow);
  };

  const getCurrentPicture = (picture) => {
    if (picture !== showFullSizePicture) {
      setFullSizePicture(picture);
    } else {
      return picture;
    }
  };

  const getNewCollection = (picture) => {
    console.log(nextPictures);
    const filteredCurrentCollection = nextPictures.filter((item) => {
      return item !== picture;
    });
    const newCurrentCollection = [picture, ...filteredCurrentCollection];

    setNewCollection(newCurrentCollection);
  };

  console.log(showFullSizePicture);

  const hideComponents = () => {
    setComponentsVisibility(!componentsVisibility);
  };

  return (
    <AppContext.Provider
      value={{
        newCollection,
        getNextPictures,
        nextPictures,
        showFullSizePicture,
        getCurrentPicture,
        hideComponents,
        getNewCollection,
        componentsVisibility,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
