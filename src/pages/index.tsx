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
        <>
            <main className="bg-dark-layer-2 min-h-screen ">
                <Topbar />
				<HomePage />
            </main>
        </>
    );
}
