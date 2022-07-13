export interface IPersonagen {
    id: number;
    name: string;
    image: string;
    favorito: boolean;
}

export type actionType = {
    type: string;
    payload?: any;
}

export const FETCH_PERSO_START = 'FETCH_PERSO_START';
export const FETCH_PERSO_SUCCESS = 'FETCH_PERSO_SUCCESS';
export const FETCH_PERSO_FAILURE = 'FETCH_PERSO_FAILURE';
export const ATUALIZAR_FAV = 'ATUALIZAR_FAV';
export const RESET_FAV = 'RESET_FAV';