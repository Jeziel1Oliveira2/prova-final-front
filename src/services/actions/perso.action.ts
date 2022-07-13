import { API_URL } from "../api";
import { IPersonagen, FETCH_PERSO_START, FETCH_PERSO_FAILURE, FETCH_PERSO_SUCCESS, ATUALIZAR_FAV, RESET_FAV } from "../types/types"; 


const fetchPersoStart = () => {
    return {
        type: FETCH_PERSO_START
    }
}

const fetchPersoSuccess = (perso : IPersonagen[]) => {
    return {
        type: FETCH_PERSO_SUCCESS,
        payload: perso,
    }
}

const fetchPersoFailure = (error : string) => {
    return {
        type: FETCH_PERSO_FAILURE,
        payload: error,
    }
}

export const atualizarFav = (id : number) => {
    return {
        type: ATUALIZAR_FAV,
        payload: id,
    }
}

export const resetFav = () => {
    return {
        type: RESET_FAV,
    }
}
export const fetchPersoThunk = () => {
    return async (dispatch : any) => {
        dispatch(fetchPersoStart());
        try {
            const response = await fetch(`${API_URL}/character`);
            const data = await response.json();
            const dadosComFavoritos = data.results.map((personagen : IPersonagen) => {
                return {
                    ...personagen,
                    favorito: false,
                }
            })
            dispatch(fetchPersoSuccess(dadosComFavoritos));
        } catch (error : any) {
            dispatch(fetchPersoFailure(error.message));
        }
    }
}

export const filterPersoThunk = (filter : string) => {
    return async (dispatch : any) => {
        dispatch(fetchPersoStart());
        try {
            const response = await fetch(`${API_URL}/character/?name=${filter}`);
            const data = await response.json();
            dispatch(fetchPersoSuccess(data.results));
        } catch (error : any) {
            dispatch(fetchPersoFailure(error.message));
        }
    }
}