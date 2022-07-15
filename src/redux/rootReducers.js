import { combineReducers } from 'redux'
import cakeReducer from './cakes/cakeReduce'
import iceCreamReducer from './iceCream/iceCreamReduce'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer