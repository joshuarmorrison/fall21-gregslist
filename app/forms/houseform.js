export function getHouseFormTemplate(){
    return /* html */` 
    <form id = "house-form" class = "bg-white rounded visually-hidden" onsubmit="app.housesController.addHouse()">
    <div class="form-group">
    <label for="sqft" class="">Square Footage</label>
    <input type="number" name="sqft" id="sqft">
  </div>
  <div class="form-group">
  <label for="bedrooms" class="">Bedrooms</label>
  <input type="number" name="bedrooms" id="bedrooms">
</div>
<div class="form-group">
<label for="bathrooms" class="">Bathrooms</label>
<input type="number" name="bathrooms" id="bathrooms">
</div>
<div class="form-group">
<label for="price" class="">Listing price</label>
<input type="number" name="price" id="price">
</div>
<div class="form-group">
<label for="description" class="">Description</label>
<input type="string" name="description" id="description">
</div>
<div class="form-group">
<label for="img" class=""></label>
<input type="string" name="img" id="img">
</div>
<button type="submit">Submit</button>
    </form>`
}