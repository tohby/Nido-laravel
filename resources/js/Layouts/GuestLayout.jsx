import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

export default function Guest({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className="min-h-screen">
            <Navbar openSidebar={setOpenSidebar} />
            <main>{children}</main>
            <Sidebar
                isOpen={openSidebar}
                onClose={() => setOpenSidebar(false)}
            />
            <Footer />
        </div>
    );
}
