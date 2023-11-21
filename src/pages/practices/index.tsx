import Practice from "@/components/Practices/Practice";
import Topbar from "@/components/Topbar/Topbar";
import React from "react";

const PracticePage = () => {
    return (
        <div className="bg-dark-layer-2 min-h-screen ">
            <Topbar />
            <Practice />
        </div>
    );
};

export default PracticePage;
