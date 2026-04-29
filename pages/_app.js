import SpaceBackground from "@/components/SpaceBackground";
import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SpaceBackground />
      <Component {...pageProps} />
    </>
  );
}
