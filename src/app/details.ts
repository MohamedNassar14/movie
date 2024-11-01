export interface Details {
    adult:boolean,
    backdrop_path:string,
    budget:number,
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    biography:string,
    popularity:null,
    poster_path:string,
    profile_path:string,
    release_date:string,
    revenue:number,
    runtime:number, 
    status:string,
    tagline:string,
    title?:string,
    name?:string,
    video:boolean,
    vote_average:number,
    vote_count: number,
    genres: [
        {
            id:number,
            name:string
        },
        {
            id:number,
            name:string
        }
    ],
}


