export default function InputLabel({
    value,
    className = "",
    children,
    required,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block font-medium text-sm text-gray-700 ` + className}
        >
            {value ? value : children}{" "}
            {required && <span className="text-red-500 text-lg">*</span>}
        </label>
    );
}
