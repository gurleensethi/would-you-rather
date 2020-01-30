import logger from "./logger";
import * as ReduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";

const middleware = applyMiddleware(ReduxThunk.default, logger);

export default middleware;
