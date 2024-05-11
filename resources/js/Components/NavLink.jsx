import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-3 pt-1 border-b-2 text-lg font-medium leading-8 transition duration-150 ease-in-out focus:outline-none cursor-pointer " +
                (active
                    ? "border-green-700 text-green-900 "
                    : "border-transparent text-gray-500 hover:text-green-800 focus:text-green-800 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
