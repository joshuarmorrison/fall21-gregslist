import { ProxyState } from "../AppState.js"

function _drawHouses() {
  document.getElementById('listings').innerHTML = ' <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>'
}

export class HousesController {
  constructor() {
    // TODO register the listener for houses
    ProxyState.on ('houses', _drawHouses) 
  }

  showHouses() {
   
  }

  toggleHouseForm() {
    console.log('[TODO fill me in]')
  }

}