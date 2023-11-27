import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

import { useState } from "react";
import HomePage from "@/components/Home/HomePage";

export default function Home() {
    const [loadingProblems, setLoadingProblems] = useState(true);
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return (
        <html>
            <body className="bg-white-blue min-h-screen mt-14">
                <Topbar />
                <div className="pt-5 bg-white-blue">
                    <HomePage />    
                </div>
            </body>
        </html>
    );
}
