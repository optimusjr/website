import { Dispatch, SetStateAction, useCallback, useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle, setValue] as [boolean, () => void, Dispatch<SetStateAction<boolean>>];
};

export default useToggle;
