export type TrackType = {
    _id: number,
    name: string,
    author: string,
    release_date: string,
    genre: string[],
    album: string,
    logo: unknown,
    track_file: string,
    startedUser: number,
    duration_in_seconds: number,
}