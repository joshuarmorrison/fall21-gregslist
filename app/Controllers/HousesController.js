import { ProxyState } from "../AppState.js"
import {housesService} from "../Services/HousesService.js"
import {getHouseFormTemplate} from "../forms/houseform.js"
function _drawHouses(){
  let template =''
  ProxyState.houses.forEach(house => template += house.CardTemplate)
  document.getElementById("listings").innerHTML = template
}

export class HousesController {
  constructor() {
    // TODO register the listener for houses
    ProxyState.on ('houses', _drawHouses) 
  }
  
  showHouses() {
    document.getElementById('listings').innerHTML = ' <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>'
    document.getElementById("forms").innerHTML = getHouseFormTemplate()
  }

  toggleHouseForm() {
    document.getElementById("house-form").classList.toggle("visually-hidden")
  }

  addHouse(){
    event.preventDefault()
    const form = event.target
    const houseData = {
      sqft: form.sqft.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }

try {
  housesService.addHouse(houseData)
} catch (error) {
  console.error('[TODO] you were supposed to do this', error)
  return
}
form.reset()
}
}