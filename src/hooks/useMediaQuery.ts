import { useEffect, useState } from "react";

const mediaMatches = (query: string): boolean => {
  // Prevents SSR issues
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }
  return false;
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  function handleChange() {
    setMatches(mediaMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    // add EventListener
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
