import { generateId } from "../Utils/generateId.js"


export class House {
    constructor(houseData){
        this.id = houseData.id || generateId()
        this.sqft = houseData.sqft
        this.bedrooms = houseData.bedrooms
        this.bathrooms = houseData.bathrooms
        this.price = houseData.price 
        this.description = houseData.description 
        this.img = houseData.img

    }
    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
          <div class="card">
            <img src="${this.img}" alt="listing image" class="rounded">
            <div class="card-body">
              <h5 class="d-flex justify-content-between">
                <span>Bathrooms: ${this.bathrooms} sqft:${this.sqft}</span>
                <p>$ ${this.price}</p>
              </h5>
              <p>${this.description}</p>
            </div>
          </div>
        </div>
        `
      }
}
