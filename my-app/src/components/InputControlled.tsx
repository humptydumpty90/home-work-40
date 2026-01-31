interface ControlledInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const ControlledInput = ({ value, onChange }: ControlledInputProps) => {
    const Click = () => {
        console.log("Value:", value);
    };

    return (
        <>
            <input
                type="text"
                value={value}
                placeholder="Write somethins right here"
                onChange={(e) => onChange(e.target.value)}
            />
            <button onClick={Click}>Show value</button>
            <p>Value: {value}</p>
        </>
    );
};
