import React from "react";
import Head from "next/head";
import { Main } from "./styles";
import Navbar from '@components/Navbar'

const Layout = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>{`Delman - ${title}`}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Navbar />
      <Main {...props}>{children}</Main>
    </>
  );
};

Layout.defaultProps = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
};

export default Layout;
