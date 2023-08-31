import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

interface LayoutComponent {
  getLayout?(page: JSX.Element): JSX.Element;
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as LayoutComponent)?.getLayout || ((page) => page);

  return (
    <>
      <Provider store={store}>
        <Toaster position="bottom-right" />
        <SessionProvider session={pageProps.session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </Provider>
    </>
  );
}
