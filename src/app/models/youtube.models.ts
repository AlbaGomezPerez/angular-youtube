// To parse this data:
//
//   import { Convert, Youtube } from "./file";
//
//   const youtube = Convert.toYoutube(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Youtube {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  items:         Item[];
  pageInfo:      PageInfo;
}

export interface Item {
  kind:    ItemKind;
  etag:    string;
  id:      string;
  snippet: Video;
}

export enum ItemKind {
  YoutubePlaylistItem = 'youtube#playlistItem',
}

export interface Video {
  publishedAt:  Date;
  channelId:    ChannelID;
  title:        string;
  description:  string;
  thumbnails:   Thumbnails;
  channelTitle: ChannelTitle;
  playlistId:   PlaylistID;
  position:     number;
  resourceId:   ResourceID;
}

export enum ChannelID {
  UC2Ie8FYpTR59XnuFEFwhs9Q = 'UC2Ie8FYpTR59XnuFEFwhs9Q',
}

export enum ChannelTitle {
  CorosYDanzasVillaDeLeganés = 'Coros y Danzas Villa de Leganés',
}

export enum PlaylistID {
  UU2Ie8FYpTR59XnuFEFwhs9Q = 'UU2Ie8FYpTR59XnuFEFwhs9Q',
}

export interface ResourceID {
  kind: ResourceIDKind;
  videoId: string;
}

export enum ResourceIDKind {
  YoutubeVideo = 'youtube#video',
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres?: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

