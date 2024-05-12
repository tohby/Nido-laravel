import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Drawer from "@/Components/Drawer";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Drawer isOpen={false} dismiss={() => {}} />
            <Footer />
        </div>
    );
}
