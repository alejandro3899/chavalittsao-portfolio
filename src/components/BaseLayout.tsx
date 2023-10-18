import {
  Footer as FooterType,
  Navigation,
  Settings,
  Social,
} from "@/types/cms";
import { getGlob } from "@/utils/api";
import Footer from "./Footer";
import MainNav from "./MainNav";

export default async function BaseLayout({
  children,
  theme = "default",
}: {
  children: React.ReactNode;
  theme?: "light" | "default";
}) {
  const settings = await getGlob<Settings>(
    "/settings",
    {},
    { next: { tags: ["settings"] } }
  );
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
      <MainNav settings={settings} theme={theme} navData={navData} />
      <main className="w-full min-h-screen flex flex-col items-center">
        {children}
      </main>
      <Footer socialsData={socialsData} footerData={footerData} />
    </>
  );
}
