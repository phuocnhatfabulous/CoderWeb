import React, { useEffect, useState } from 'react';
import ProblemsTable from '../ProblemsTable/ProblemsTable';

const Practice = () => {
  const [loadingProblems, setLoadingProblems] = useState(true);
  useEffect(() => {
    document.title = 'Luyện tập | ITUTC2';
  }, []);
  return (
    <div>
      <h1 className="mt-10 mb-5 text-center text-2xl font-medium uppercase text-dark-blue">
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
        <table className="text-sm text-left text-dark-blue sm:w-7/12 w-full max-w-[1200px] mx-auto">
          {!loadingProblems && (
            <thead className="text-xs text-brand-orange uppercase border-b ">
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
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div className="w-6 h-6 shrink-0 rounded-full bg-white-blue-200"></div>
      <div className="h-4 sm:w-52  w-32  rounded-full bg-white-blue-200"></div>
      <div className="h-4 sm:w-52  w-32 rounded-full bg-white-blue-200"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-white-blue-200"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Practice;
