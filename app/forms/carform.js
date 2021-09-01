export function getCarFormTemplate() {
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.carsController.addCar()"
  id="car-form">
  <div class="form-group">
    <label for="make" class="">Make:</label>
    <select name="make" id="make" required class="form-control">
      <option disabled selected value="">Please Choose your car make</option> 
      <option>Honda</option>
      <option>Hyundai</option>
      <option>Tesla</option>
      <option>Toyota</option>
      <option>Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="model" class="">Model:</label>
    <input type="text" class="form-control" name="model" id="model" required>
  </div>
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input type="number" class="form-control" name="price" id="price" min="0" max="9999999">
  </div>
  <div class="form-group">
    <label for="selling" class="">Is this for sale?</label>
    <input type="checkbox" name="selling" id="selling" checked>
  </div>
  <div class="form-group">
    <label for="mileage" class="">
      <span>mileage:</span>
      <span id="miles" class="ms-2">0</span>
    </label>
    <input type="range" name="mileage" id="mileage" min="1" max="1000"
      onchange="app.carsController.showMiles()" class="form-control" step=".05">
  </div>
  <div class="form-group">
    <label for="color" class="">color:</label>
    <input type="color" class="form-control" name="color" id="color">
  </div>
  <div class="form-group">
    <label for="year" class="">year:</label>
    <input type="year" class="form-control" name="year" id="year">
  </div>
  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>
  <div class="form-group">
    <label for="img" class="">img:</label>
    <input type="url" class="form-control" name="img" id="img" required>
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>
</form>
  `
}