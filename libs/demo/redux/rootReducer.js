// ** Reducers Imports
import modal from "./slices/modal"
import { cartReducer } from "./slices/cart"
import signupData from "./slices/signupdata"

const rootReducer = {
  modal,
  cartReducer,
  signupData
}

export default rootReducer
