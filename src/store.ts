import { RematchRootState, init } from "@rematch/core";
import { routerReducer } from "react-router-redux";
import selectPlugin from "@rematch/select";

import data from "./data/data.model";

const models = { data };
const selectors = selectPlugin();
export const store = init({
  models,
  plugins: [selectors],
  redux: {
    reducers: {
      router: routerReducer
    },
    middlewares: []
  }
});
export const { select } = store;

export type Dispatch = typeof store.dispatch;
export type RootState = RematchRootState<typeof models>;
