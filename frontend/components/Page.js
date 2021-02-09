import PropTypes from 'prop-types';
import { GlobalStyles, InnerStyles } from '../styles/GlobalStyles';
import Header from './Header';

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.object,
};
