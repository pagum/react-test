import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Dispatch, RootState, select } from "./store";
import { AlbumExpansionPanel } from "./AlbumExpansionPanel";
import { DataInterface } from "./data/data.model";
interface MainPageProps {
  fetchData: any;
  data: DataInterface[];
}
const MainPage = ({ fetchData, data }: any) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <AlbumExpansionPanel data={data} />

      {data && data.map((song: any) => console.log(song))}
    </div>
  );
};

const mapState = (state: RootState) => ({
  data: select.data.getData(state)
});

const mapDispatch = (dispatch: Dispatch) => ({
  fetchData: dispatch.data.fetchData
});
export default connect(mapState, mapDispatch)(MainPage);
