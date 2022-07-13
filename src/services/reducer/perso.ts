import { actionType, FETCH_PERSO_FAILURE, FETCH_PERSO_START, FETCH_PERSO_SUCCESS, ATUALIZAR_FAV, RESET_FAV} from "../types/types"

const initialState = {
    perso:[],
    loading:false,
    error:null,
}

export const persoReducer = (state = initialState, action : actionType) => {
    switch(action.type){
        case FETCH_PERSO_START:
            return {
                ...state,
                loading:true,
            }
        case FETCH_PERSO_SUCCESS:
            return {
                ...state,
                perso:action.payload,
                loading:false,
            }
        case FETCH_PERSO_FAILURE:
            return {
                ...state,
                loading:false,
            }
        case ATUALIZAR_FAV:
            return{
                ...state,
                perso:state.perso.map((perso : any) => {
                    if(perso.id === action.payload){
                        return {
                            ...perso,
                            favorito:!perso.favorito,
                        }
                    }
                    return perso;
                })
            }
        case RESET_FAV:
            return{
                ...state,
                perso:state.perso.map((perso : any) => {
                    return {
                        ...perso,
                        favorito:false,
                    }
                })
            }
        default:
            return state;
    }
}