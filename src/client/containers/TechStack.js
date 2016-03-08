import { connect } from 'react-redux';
import StackInfo from '../components/StackInfo';

const mapStateToProps = (state, ownProps) => {
  return {items: state.techStack};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const TechStackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StackInfo)

export default TechStackContainer