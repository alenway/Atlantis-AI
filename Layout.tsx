import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layout() {
    return (
        <div className="bg-ocean-950 min-h-screen text-slate-200 selection:bg-sonar-light selection:text-ocean-950">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
