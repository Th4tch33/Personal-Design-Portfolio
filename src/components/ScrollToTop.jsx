import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]); // Runs every time the route changes

  return null; // This component doesn't render anything itself
}

export default ScrollToTop;
