const camelcase = require('camelcase')
const lodash = require('lodash')
const get = lodash.get

const envVars = {
  ...process.env,
}

/** Create a object key/value with process.env parsing the
* key vars to camelCase. Example:
* process.env = {
  MY_VAR= "my var"
}

result = {
  myVar: "my var"
}
**/
const configReducer = (accum, currentVar) => {
  if (!currentVar) {
    return accum
  }

  const key = get(currentVar, '[0]', null)
  const value = get(currentVar, '[1]', null)

  if (!key || !value) return accum

  const parsedKey = camelcase(key)
  return {
    ...accum,
    [parsedKey]: value,
  }
}

// const config = Object.entries(envVars).reduce(configReducer, {})

const config = {
  test: process.env.TEST,
}

export default config
