import { defineconfig } from "vite";
import react from "@vitejs/plugin-react";   

export default defineconfig(
    {
        base:"/react-basic-static/",
        plugins:[react()],
    }
);