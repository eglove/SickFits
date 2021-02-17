import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ApolloProvider } from '@apollo/client'
import Page from '../components/Page'
import withData from '../lib/withData'

import '../styles/nprogress.css'
import Head from 'next/head'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function SickFits ({ Component, pageProps, apollo }) {
  return (
      <ApolloProvider client={apollo}>
        <Head>
          <title>Sick Fits</title>
        </Head>
        <Page>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
  );
}

SickFits.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(SickFits);

SickFits.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  apollo: PropTypes.object,
};
