import ProblemsTable from '@/components/ProblemsTable/ProblemsTable';
import Topbar from '@/components/Topbar/Topbar';
import useHasMounted from '@/hooks/useHasMounted';

import { useState } from 'react';
import HomePage from '@/components/Home/HomePage';
import DefaultLayout from '@/components/layout/DefaultLayout';

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <DefaultLayout title={'ITUTC2 CODER'}>
      <div className="px-36">
        <HomePage />
      </div>
    </DefaultLayout>
  );
}
