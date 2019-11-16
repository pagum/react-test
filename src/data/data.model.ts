import { getData } from "./data.api";
import { createModel } from "@rematch/core";

import { sortSongs, SortedSongs } from "./data.utils";
export interface DataInterface {
  band: string;
  album: string;
  song: string;
}
const dataModel = createModel({
  name: "data",
  state: { data: undefined },
  reducers: {
    setData(state, payload: SortedSongs[]) {
      return {
        ...state,
        data: payload
      };
    }
  },

  effects: {
    async fetchData() {
      await getData().then(result => {
        const sortedSongs = sortSongs(result);

        this.setData(sortedSongs);
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
