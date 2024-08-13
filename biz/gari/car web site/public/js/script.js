// script.js

// Fetch car data from cars.json (or other data source)
fetch('data/cars.json')
  .then(response => response.json())
  .then(cars => {
    // Get the car list container
    const carList = document.getElementById('car-list');

    // Loop through each car and create an HTML element for it
    cars.forEach(car => {
      // Create a div element for each car
      const carItem = document.createElement('div');
      carItem.classList.add('car-item');

      // Create the car image
      const carImage = document.createElement('img');
      carImage.src = car.image || 'images/placeholder.png'; // Use placeholder if no image
      carImage.alt = car.make + ' ' + car.model;
      carItem.appendChild(carImage);

      // Create the car information
      const carInfo = document.createElement('div');
      carInfo.innerHTML = `
        <h2>${car.make} ${car.model}</h2>
        <p>Year: ${car.year}</p>
        <p>Mileage: ${car.mileage}</p>
        <p>Price: $${car.price}</p>
      `;
      carItem.appendChild(carInfo);

      // Add the car item to the car list
      carList.appendChild(carItem);
    });
  })
  .catch(error => {
    console.error('Error fetching car data:', error);
  });