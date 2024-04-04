import type { AppProps } from "next/app";
import "../styles/index.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/framer/PageTransition";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <PageTransition key={router.route}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransition>
    </AnimatePresence>
  );
}
