import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
