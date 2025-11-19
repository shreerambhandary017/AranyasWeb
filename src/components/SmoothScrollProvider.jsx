import { createContext, useContext, useEffect } from 'react';

const SmoothScrollContext = createContext(null);

export const useSmoothScroll = () => useContext(SmoothScrollContext);

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = previousBehavior;
    };
  }, []);

  return <SmoothScrollContext.Provider value={null}>{children}</SmoothScrollContext.Provider>;
};

export default SmoothScrollProvider;

