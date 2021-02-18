import PropTypes from 'prop-types';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  const { token } = query;

  if (!query?.token) {
    return <RequestReset />;
  }

  return <Reset token={query.token} />;
}

ResetPage.propTypes = {
  query: PropTypes.object,
};
