import React, { useEffect, useState } from 'react';
import ProblemsTable from '../ProblemsTable/ProblemsTable';

const Practice = () => {
  const [loadingProblems, setLoadingProblems] = useState(true);
  useEffect(() => {
    document.title = "Luyện tập | ITUTC2";
  }, []);
  return (
    <div>
      <h1 className="fmediumuppercaseont- mt-10 mb-5 text-center text-2xl text-gray-700 dark:text-gray-400">
        &ldquo; HÃY ĐỌ SỨC VỚI CHUỖI BÀI LUYỆN &rdquo; 👇
      </h1>
      <div className="relative mx-auto overflow-x-auto px-6 pb-10">
        {loadingProblems && (
          <div className="mx-auto w-full max-w-[1200px] animate-pulse sm:w-7/12">
            {[...Array(10)].map((_, idx) => (
              <LoadingSkeleton key={idx} />
            ))}
          </div>
        )}
        <table className="mx-auto w-full max-w-[1200px] text-left text-sm text-gray-500 dark:text-gray-400 sm:w-7/12">
          {!loadingProblems && (
            <thead className="border-b text-xs uppercase text-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="w-0 px-1 py-3 font-medium">
                  Trạng thái
                </th>
                <th scope="col" className="w-0 px-6 py-3 font-medium">
                  Tiêu đề
                </th>
                <th scope="col" className="w-0 px-6 py-3 font-medium">
                  Mức độ
                </th>

                <th scope="col" className="w-0 px-6 py-3 font-medium">
                  Chủ đề
                </th>
                <th scope="col" className="w-0 px-6 py-3 font-medium">
                  Lời giải
                </th>
              </tr>
            </thead>
          )}
          <ProblemsTable setLoadingProblems={setLoadingProblems} />
        </table>
      </div>
    </div>
  );
};
const LoadingSkeleton = () => {
  return (
    <div className="mt-4 flex items-center space-x-12 px-6">
      <div className="h-6 w-6 shrink-0 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 w-32  rounded-full  bg-dark-layer-1 sm:w-52"></div>
      <div className="h-4 w-32  rounded-full bg-dark-layer-1 sm:w-52"></div>
      <div className="h-4 w-32 rounded-full bg-dark-layer-1 sm:w-52"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Practice;
