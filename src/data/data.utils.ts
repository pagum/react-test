import { DataInterface } from "./data.model";
import * as R from "ramda";

interface SortSongsWithBandsProps {
  bands: string[];
  songs: DataInterface[];
}
const sortWithBands = ({ bands, songs }: SortSongsWithBandsProps) =>
  bands.map(band => ({
    band,
    songs: songs.filter((song: DataInterface) => song.band === band)
  }));

const sortWithAlbums = ({ sortedWithBands }: any) =>
  sortedWithBands.map((band: any) => band.songs.map((song: any) => song.album));

export const sortSongs = (songs: any) => {
  const bands: string[] = R.uniq(songs.map((song: DataInterface) => song.band));
  const sortedWithBands = sortWithBands({ bands, songs });
  const albums = R.uniq(songs.map((song: DataInterface) => song.album));
  const xxxx = albums.map(album => ({
    title: album,
    songs: songs.filter((song: DataInterface) => song.album === album)
  }));
  console.log(xxxx);
};
