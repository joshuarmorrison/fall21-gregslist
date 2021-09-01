import { generateId } from "../Utils/generateId.js"

export class Car {
  constructor(carData) {
    this.id = carData.id || generateId()
    this.make = carData.make
    this.model = carData.model
    this.year = carData.year
    this.color = carData.color
    this.mileage = carData.mileage
    this.description = carData.description
    this.price = carData.price
    this.img = carData.img
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span style="color: ${this.color}" >${this.make} - ${this.model}</span>
            <span>$ ${this.price}</span>
          </h5>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }


}