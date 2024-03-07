import { useState } from "react";

export const Input = (props) => {
    const [value, setValue] = useState(props.value);
    const [enableSetValue, setEnableSetValue] = useState(false);

    const handleValueClick = () => {
        setEnableSetValue(true);
    };
    const style={
        display:"inline"
    }
    return (
        <div onClick={handleValueClick} style={style}>
            {enableSetValue ? (
                <input
                    type={props.inputType}
                    value={value}
                    onBlur={() => {setEnableSetValue(false); props.update(value, props.field, props.id);}}
                    onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <span> {value} </span>
            )}
        </div>
    );
};

export default Input;
