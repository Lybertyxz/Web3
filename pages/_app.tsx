import type { AppProps } from "next/app";
import "../styles/index.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/framer/PageTransition";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <Layout>
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </Layout>
    </AnimatePresence>
  );
}
