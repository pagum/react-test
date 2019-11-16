import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SortedSongs } from "../data/data.utils";

import {
  BandExpansionPanelDetails,
  LoaderWrapper,
  Loader
} from "./ExpasionPanels.style";
import { BandPanel } from "./BandPanel";

interface AlbumExpansionPanelProps {
  data: SortedSongs[];
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

export const AlbumExpansionPanel = ({ data }: AlbumExpansionPanelProps) => {
  const classes = useStyles();
  return data ? (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Albums</Typography>
        </ExpansionPanelSummary>
        <BandExpansionPanelDetails>
          {data.map(band => (
            <div key={band.band}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {band.band}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <BandPanel data={band} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          ))}
        </BandExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  ) : (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};
