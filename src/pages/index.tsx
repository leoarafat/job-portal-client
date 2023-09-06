import BecomePaidMember from "@/components/ui/BecomePaidMember";
import Courses from "@/components/ui/Courses";
import FeaturedCompany from "@/components/ui/FeaturedCompany";
import FindOrPostJob from "@/components/ui/FindOrPostJob";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/Hero";
import InterviewQuestions from "@/components/ui/InterviewQuestions";
import RecentJobCircular from "@/components/ui/RecentJob";

import RecentJobCircularByLocations from "@/components/ui/RecentJobCircularByLocations";
import ResumeBuilder from "@/components/ui/ResumeBuilder";
import SkillAssetment from "@/components/ui/SkillAssetment";
import dynamic from "next/dynamic";
import Head from "next/head";
const RootLayout = dynamic(() => import("../components/layouts/RootLayout"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <HeroSection />
        <FeaturedCompany />
        <RecentJobCircular />
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
