import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./Navbar";

const rootElement = document.getElementById("navbar");
const navbar = createRoot(rootElement);

navbar.render(
    <StrictMode>
    <Navbar/>
    </StrictMode>
);