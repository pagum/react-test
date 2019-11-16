import { getData } from "./data.api";
import { createModel } from "@rematch/core";

import { sortSongs } from "./data.utils";
export interface DataInterface {
  band: string;
  album: string;
  song: string;
}
const dataModel = createModel({
  name: "data",
  state: { data: undefined },
  reducers: {
    setData(state, payload: DataInterface[]) {
      console.log(payload);
      return {
        ...state,
        data: payload
      };
    }
  },

  effects: {
    async fetchData() {
      await getData().then(result => {
        console.log(result);
        const sortedSongs = sortSongs(result);
        console.log(sortedSongs);
        this.setData(result);
      });
    }
  },
  selectors: slice => ({
    getData() {
      return slice(state => state.data);
    }
  })
});

export default dataModel;
