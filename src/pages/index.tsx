import HeroSection from "@/components/ui/Hero";
import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("../components/layouts/RootLayout"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
    </>
  );
}
Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
