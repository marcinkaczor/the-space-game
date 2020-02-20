import axios from 'axios'

import * as API from '../constants/api'

export default axios.create({
  baseURL: API.ROOT
})
