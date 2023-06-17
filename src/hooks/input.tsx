import { useState } from "react";

const useInput = (initialValue:any) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: { target: { value: any; }; }) => {
        setValue(event.target.value);
    };
    return {
        value,
        onChange: handleChange
    };
}

export default useInput