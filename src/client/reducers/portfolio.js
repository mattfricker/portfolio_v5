const portfolioItem = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        hovered: !state.hovered
      })
    default:
      return state
  }
}

const portfolio = (state = [], action) => {
  switch (action.type) {
    case 'HOVER_PORTFOLIO_ITEM':
      return state.map(item =>
        portfolioItem(item, action)
      )
    default:
      return state
  }
}

export default portfolio