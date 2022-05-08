import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer1} from "./reducer1";
import {reducer2} from "./reducer2";


const rootReducer = combineReducers({
    name1: reducer1,
    name2: reducer2,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>