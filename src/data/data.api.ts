import data from "./data.json";
import { DataInterface } from "./data.model.js";

// intentionally mocked api to extract data
export const getData = () =>
  new Promise<DataInterface[]>(resolve =>
    setTimeout(() => resolve(data), 2000)
  );
