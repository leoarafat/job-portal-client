import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("../components/layouts/RootLayout"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
}
Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
