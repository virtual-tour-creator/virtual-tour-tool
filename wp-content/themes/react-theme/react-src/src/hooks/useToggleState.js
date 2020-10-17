import { useState } from "react";

function useToggle(initiaVal = false)  {
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    };

    return[state, toggle];
}

export default useToggle;