import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Dispatch, RootState, select } from "./store";
import { AlbumExpansionPanel } from "./ExpansionPanels/AlbumExpansionPanel";
import { SortedSongs } from "./data/data.utils";
interface MainPageProps {
  fetchData: any;
  data: SortedSongs[];
}
const MainPage = ({ fetchData, data }: MainPageProps) => {
  useEffect(() => {
    fetchData();
  });
  return <AlbumExpansionPanel data={data} />;
};

const mapState = (state: RootState) => ({
  data: select.data.getData(state)
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchData: dispatch.data.fetchData
});
export default connect(mapState, mapDispatch)(MainPage);
