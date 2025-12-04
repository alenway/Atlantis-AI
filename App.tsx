import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/HomePage";
import NewHome from "./pages/NewHome";

function App() {
    return (
        <Routes>
            {/* Layout route */}
            <Route path="/" element={<Layout />}>
                {/* Home page */}
                <Route index element={<Home />} />

                {/* New page at /home */}
                <Route path="home" element={<NewHome />} />

                {/* Add more pages later */}
                {/* <Route path="about" element={<About />} /> */}
                {/* <Route path="pricing" element={<Pricing />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
