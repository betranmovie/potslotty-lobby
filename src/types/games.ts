
export interface IGameCategory {
    [key: string]: IGame
}



export interface IProvider {
    code: string;
}
export interface ICategory {
    code: string;
    name: string;
}
export interface IGame {
    id: number,
    alias: string,
    name: string,
    thumbnail: string,
    provider: IProvider,
    category: ICategory,
}
