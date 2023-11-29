import React, { useState } from 'react';
import ProblemsTable from '../ProblemsTable/ProblemsTable';

const Practice = () => {
  const [loadingProblems, setLoadingProblems] = useState(true);

  return (
    <div className="select-none">
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
        <table className="mx-auto w-full max-w-[1200px] text-left text-sm text-dark-blue sm:w-7/12">
          {!loadingProblems && (
            <thead className="border-b text-xs font-bold uppercase text-brand-orange ">
              <tr className="divide-y-0 divide-solid">
                <th scope="col" className="w-16 px-1 py-3 font-bold">
                  Trạng thái
                </th>
                <th scope="col" className="w-0 px-6 py-3 font-bold">
                  Tiêu đề
                </th>
                <th scope="col" className="w-0 px-6 py-3 font-bold">
                  Mức độ
                </th>

                <th scope="col" className="w-0 px-6 py-3 font-bold">
                  Chủ đề
                </th>
                <th scope="col" className="w-0 px-6 py-3 font-bold">
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
      <div className="h-6 w-6 shrink-0 rounded-full bg-white-blue-200"></div>
      <div className="h-4 w-32  rounded-full  bg-white-blue-200 sm:w-52"></div>
      <div className="h-4 w-32  rounded-full bg-white-blue-200 sm:w-52"></div>
      <div className="h-4 w-32 rounded-full bg-white-blue-200 sm:w-52"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Practice;
