import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Wild with Harry`;
  }, [title]);
};

export default useTitle;
