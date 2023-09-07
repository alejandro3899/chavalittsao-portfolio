import { Footer as FooterType, Navigation, Social } from "@/types/cms";
import Footer from "./Footer";
import MainNav from "./MainNav";
import { getGlob } from "../utils/api";

export default async function BaseLayout({
  children,
  theme = "default",
}: {
  children: React.ReactNode;
  theme?: "light" | "default";
}) {
  const navData = await getGlob<Navigation>(
    "/navigation",
    {},
    { next: { tags: ["navigation"] } }
  );
  const footerData = await getGlob<FooterType>(
    "/footer",
    {},
    { next: { tags: ["footer"] } }
  );
  const socialsData = await getGlob<Social>(
    "/socials",
    {},
    { next: { tags: ["socials"] } }
  );

  return (
    <>
      <MainNav theme={theme} navData={navData} />
      <main className="w-full min-h-screen flex flex-col items-center">
        {children}
      </main>
      <Footer socialsData={socialsData} footerData={footerData} />
    </>
  );
}
