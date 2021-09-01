import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService{
    addHouse(houseData){
        var Testhouse = new House(houseData)
        ProxyState.houses = [...ProxyState.houses, Testhouse]
    }


}

export const housesService = new HousesService()