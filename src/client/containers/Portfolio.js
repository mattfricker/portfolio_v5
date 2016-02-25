import { connect } from 'react-redux'
import PortfolioItem from '../components/PortfolioItem'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.portfolio.initial
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const Portfolio = connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioItem)

export default Portfolio