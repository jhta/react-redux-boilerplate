import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

const asPage = Component => {
  const AsPage = props => {
    return (
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={store}>
          <Component {...props} />
        </StoreContext.Provider>
      </ThemeProvider>
    )
  }

  hoistNonReactStatics(AsPage, Component)
  return AsPage
}

export default asPage
