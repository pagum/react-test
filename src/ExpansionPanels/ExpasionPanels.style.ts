import styled from "styled-components";
import {
  ListItem,
  List,
  ExpansionPanelDetails,
  CircularProgress
} from "@material-ui/core";

export const AlbumListItem = styled(ListItem)`
  padding: 15px;
`;
export const AlbumList = styled(List)`
  padding: 15px;
`;

export const AlbumExpansionPanelDetails = styled(ExpansionPanelDetails)`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
export const BandExpansionPanelDetails = styled(ExpansionPanelDetails)`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
export const AlbumPanel = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
export const LoaderWrapper = styled.div`
  cpadding: 40px;
`;
export const Loader = styled(CircularProgress)`
  margin: 10px 50%;
`;
