import BaseLayout from "../components/BaseLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BaseLayout theme="default">{children}</BaseLayout>;
}
