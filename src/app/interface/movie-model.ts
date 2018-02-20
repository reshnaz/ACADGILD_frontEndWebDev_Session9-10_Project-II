// Model to be used by our app for storing movie data.

export interface MovieModel {
    id: number,
    movieName: string,
    movieRating: number,
    movieReleaseDate: Date,
    movieDescription: string
    movieImageURL: string
}
