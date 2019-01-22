import { connect } from 'react-redux';

import { ArticleList } from '.';

const mapStateToProps = ({ articles }) => ({
  articles,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
