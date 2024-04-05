// pages/_app.js
import { AppProps } from "next/app";
import "../styles/index.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/framer/PageTransition";
import { AuthProvider } from "../context/AuthContext";
import { NavBarProvider } from "../context/NavBarContext";
import { combineProviders } from "../utils/providers";

const CombinedProvider = combineProviders(AuthProvider, NavBarProvider);

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <CombinedProvider>
      <Layout>
        <AnimatePresence>
          <PageTransition key={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      </Layout>
    </CombinedProvider>
  );
}
