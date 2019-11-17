import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import { Avatar } from "@material-ui/core";
import {
  AlbumListItem,
  AlbumList,
  AlbumExpansionPanelDetails,
  AlbumPanel
} from "./ExpasionPanels.style";

import { SortedSongs } from "../data/data.utils";
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
interface BandPanelProps {
  data: SortedSongs;
}
export const BandPanel = ({ data }: BandPanelProps) => {
  const classes = useStyles();
  const { albums } = data;
  return (
    <AlbumPanel>
      {albums.map(album => (
        <div key={`${album.songs[0].band} ${album.title}`}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{album.title}</Typography>
            </ExpansionPanelSummary>
            <AlbumExpansionPanelDetails>
              {album.songs.map(song => (
                <AlbumList key={`${song.album} ${song.song}`}>
                  <AlbumListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <AudiotrackIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={song.song} />
                  </AlbumListItem>
                </AlbumList>
              ))}
            </AlbumExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      ))}
    </AlbumPanel>
  );
};
