import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        options,
        children,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus:border-green-800 focus:ring-green-800 rounded-md shadow-sm " +
                className
            }
            ref={input}
        >
            {children}
        </select>
    );
});
