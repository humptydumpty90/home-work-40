import { useRef } from "react";

export const UncontrolledInput = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    const handleClick = (): void => {
        console.log("Here's the text: ", inputRef.current.value);
    };

    return (
        <>
            <input
                type="text"
                ref={inputRef}
                placeholder="Write somethins right here"
            />
            <button onClick={handleClick}>Show value</button>
        </>
    );
};
