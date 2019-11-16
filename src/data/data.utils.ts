import { DataInterface } from "./data.model";
import * as R from "ramda";
import { groupBy } from "underscore";

interface PrepareDataProps {
  bandAndSongs: BandAndSongsProps[];
  albumsForBand: AlbumsForBrandsProps;
  songs: DataInterface[];
}
interface BandAndSongsProps {
  band: string;
  songs: DataInterface[];
}
interface GetSongsForBandProps {
  bands: string[];
  songsForBands: SongsForBrandsProps;
}
interface SongsForBrandsProps {
  [band: string]: DataInterface[];
}

interface AlbumsForBrandsProps {
  [band: string]: string[];
}

interface Albums {
  title: string;
  songs: DataInterface[];
}
export interface SortedSongs {
  albums: Albums[];
  band: string;
}
const sortWithAlbumsForBand = (
  arrayOfBandAndSongs: BandAndSongsProps[]
): AlbumsForBrandsProps =>
  R.mergeAll(
    arrayOfBandAndSongs.map(bandAndSongs => ({
      [bandAndSongs.band]: R.uniq(
        bandAndSongs.songs.map((song: any) => song.album)
      )
    }))
  );
const groupByBands = (songs: DataInterface[]): SongsForBrandsProps =>
  groupBy(songs, "band");

const getSongsForBand = ({
  bands,
  songsForBands
}: GetSongsForBandProps): BandAndSongsProps[] =>
  bands.map(band => ({
    band,
    songs: songsForBands[band]
  }));

const prepareData = ({
  bandAndSongs,
  albumsForBand,
  songs
}: PrepareDataProps): SortedSongs[] =>
  bandAndSongs.map((bandAndSong: BandAndSongsProps) => ({
    band: bandAndSong.band,
    albums: albumsForBand[bandAndSong.band]
      .map(album =>
        songs.filter((song: DataInterface) => {
          return song.album === album && song.band === bandAndSong.band;
        })
      )
      .map(song => ({
        songs: song,
        title: song[0].album
      }))
  }));

export const sortSongs = (songs: DataInterface[]): SortedSongs[] => {
  const bands: string[] = R.uniq(songs.map((song: DataInterface) => song.band));
  const songsForBands = groupByBands(songs);
  const bandAndSongs = getSongsForBand({ bands, songsForBands });
  const albumsForBand = sortWithAlbumsForBand(bandAndSongs);
  const sortedData = prepareData({
    bandAndSongs,
    albumsForBand,
    songs
  });

  return sortedData;
};
