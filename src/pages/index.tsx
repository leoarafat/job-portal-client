import BecomePaidMember from "@/components/ui/BecomePaidMember";
import Courses from "@/components/ui/Courses";
import FeaturedCompany from "@/components/ui/FeaturedCompany";
import FindOrPostJob from "@/components/ui/FindOrPostJob";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/Hero";
import InterviewQuestions from "@/components/ui/InterviewQuestions";
import RecentJob from "@/components/ui/RecentJob";
import RecentJobCircularByLocations from "@/components/ui/RecentJobCircularByLocations";
import ResumeBuilder from "@/components/ui/ResumeBuilder";
import SkillAssetment from "@/components/ui/SkillAssetment";
import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("../components/layouts/RootLayout"), {
  ssr: false,
});

export default function Home() {
  const jobData = {
    photoUrl:
      "https://res.cloudinary.com/arafatleo/image/upload/v1693022698/Pro%20careers/walton-logo-8655B6D7F3-seeklogo.com_c2zt2r.png",
    title: "Software Engineer",
    location: "San Francisco, CA",
    companyName: "TechCo",
    viewDetailsLink: "https://example.com/job-details",
  };
  return (
    <>
      <div>
        <HeroSection />
        <FeaturedCompany />
        <RecentJob
          photoUrl={jobData.photoUrl}
          title={jobData.title}
          location={jobData.location}
          companyName={jobData.companyName}
          viewDetailsLink={jobData.viewDetailsLink}
        />
        <RecentJobCircularByLocations />
        <FindOrPostJob />
        <BecomePaidMember />
        <SkillAssetment />
        <ResumeBuilder />
        <Courses />
        <InterviewQuestions />
        <Footer />
      </div>
    </>
  );
}
Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
