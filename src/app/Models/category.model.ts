export interface Course {
    title : string;
    attention : string;
    description : string;
    picture : string;
    youtubePlaylist : string;
    numberOfVideos : number;
    documentationLink?: string;
}

export interface Category {
    title : string;
    picture : string;
    introduction : string;
    number : number;
    courses : Course[];

}