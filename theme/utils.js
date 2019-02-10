import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { get } from 'lodash'

/**
 * Hook for access to some specific attribute in style theme
 * @param {String} query example: 'colors.blue'
 * @param {Any} defaultValue
 */
export function useTheme(query = '', defaultValue = null) {
  const localTheme = useContext(ThemeContext)
  return get(localTheme, query, defaultValue)
}
