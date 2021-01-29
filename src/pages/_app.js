import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import { Provider as ModalProvider } from "@uikit/modal";
import 'react-virtualized/styles.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cache}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </CacheProvider>
  );
};

export default MyApp;
