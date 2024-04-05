// pages/_app.js
import { AppProps } from "next/app";
import "../styles/index.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/framer/PageTransition";
import { AuthProvider } from "../context/AuthContext";
import { Providers } from "../context/Providers";

const ProvidersLayout = Providers(AuthProvider);

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ProvidersLayout>
      <Layout>
        <AnimatePresence>
          <PageTransition key={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      </Layout>
    </ProvidersLayout>
  );
}
