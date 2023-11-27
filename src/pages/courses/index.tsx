import Course from "@/components/Course/Course";
import Topbar from "@/components/Topbar/Topbar";
import React from "react";
import Slider from "@/components/Home/Slider";
import DefaultLayout from "@/components/layout/DefaultLayout";

const CoursePage = () => {
  return (
    <DefaultLayout title={"Khóa học"}>
      <div className=" my-8 place-content-center space-y-6">
        <Slider />
        <Course />
      </div>
    </DefaultLayout>
  );
};

export default CoursePage;
