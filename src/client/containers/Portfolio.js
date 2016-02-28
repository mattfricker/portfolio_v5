import { connect } from 'react-redux'
import PortfolioInfo from '../components/PortfolioInfo'

const mapStateToProps = (state, ownProps) => {
  return {items: state.portfolio};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const Portfolio = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioInfo)

export default Portfolio