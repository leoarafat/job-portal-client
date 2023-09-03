import CourseDetailsCard from "@/components/courses/CourseDetailsCard";
import dynamic from "next/dynamic";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const CourseDetails = () => {
  return (
    <div>
      <CourseDetailsCard />
    </div>
  );
};

export default CourseDetails;
CourseDetails.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
