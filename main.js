console.log("Inline script is loaded!");


document.addEventListener("DOMContentLoaded", function() {
    const carousel1 = new bootstrap.Carousel(document.getElementById('carousel1'));
    const carousel2 = new bootstrap.Carousel(document.getElementById('carousel2'));

    // Add an event listener for the slide event on carousel1
    carousel1._element.addEventListener('slide.bs.carousel', function(event) {
        // Get the index of the target slide in carousel1
        const slideIndex = event.to;

        // Move carousel2 to the corresponding slide
        carousel2.to(slideIndex);
    });
});

$(document).ready(function() {
    // Initial state
    showFoodMenu();

    // Switch button click event
    $(".switch-minuman").click(function() {
        if ($(this).text() === "Minuman") {
            showBeverageMenu();
            $(this).text("Makanan");
        } else {
            showFoodMenu();
            $(this).text("Minuman");
        }
    });

    function showFoodMenu() {
        // Update carousel indicators for food
        $(".carousel-indicators.product-label").html(`
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">Ayam Geprek</button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Lele Goreng</button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Gurame Bakar</button>
    `);

        // Update carousel items for food
        $(".carousel-inner.product-content").html(`
      <div class="carousel-item active">
        <div class="image-product">
          <img src="img/blue-over.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
          <h2>Ayam Geprek</h2>
          <p><strong>Harga: </strong>Rp. 15.000</p>
          <p><strong>Pendamping:  </strong>Sambal, aneka sayur</p>
          <p>Ayam Geprek kami adalah sajian yang memuaskan untuk para pencinta pedas yang mencari petualangan rasa yang menggembirakan di tiap tingkatan pedasnya. </p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="image-product">
          <img src="img/blue-over.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
          <h2>Lele Goreng</h2>
          <p><strong>Harga: </strong>Rp. 15.000</p>
          <p><strong>Pendamping:  </strong>Sambal, aneka sayur</p>
          <p>Lele Goreng yang digoreng langsung saat dipesan memastikan kesegaran di tiap penyajiannya, ditemani dengan lalapan dan sambal yang semakin menambah kenikmatan.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="image-product">
          <img src="img/blue-over.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
          <h2>Gurame Bakar</h2>
          <p><strong>Harga: </strong>Rp. 25.000</p>
          <p><strong>Pendamping:  </strong>Sambal, aneka sayur</p>
          <p>Gurame Bakar yang dikembangbiakkan oleh restoran kami sendiri dari bibit sampai besar untuk memastikan kualitasnya, disajikan saat masih hangat semakin menambah nafsu makan</p>
        </div>
      </div>
      
    `);
    }

    function showBeverageMenu() {
        // Update carousel indicators for beverages
        $(".carousel-indicators.product-label").html(`
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">Teh</button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Kopi</button>
    `);

        // Update carousel items for beverages
        $(".carousel-inner.product-content").html(`
      <div class="carousel-item active">
        <div class="image-product">
          <img src="img/blue-over.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
          <h2>Teh</h2>
          <p><strong>Harga: </strong>Rp. 15.000</p>
          <p>Deskripsi Teh</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="image-product">
          <img src="img/blue-over.jpg" alt="...">
        </div>
        <div class="carousel-caption info-product">
          <h2>Kopi</h2>
          <p><strong>Harga: </strong>Rp. 15.000</p>
          <p>Deskripsi Kopi</p>
        </div>
      </div>
    `);
    }
});


mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlzYWRld2EiLCJhIjoiY2xuaHVrM3FjMGxtdzJsbzlhYmR6aDZmbiJ9.6TsLmUc1BMq-dd5gEoxpPg';

// Create a new map instance
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [115.225019, -8.654076], // initial center coordinates
    zoom: 14 // initial zoom level
});

// Define branch coordinates
var branch1Coords = [115.225019, -8.654076];
var branch2Coords = [112.6338, -7.9675];

// Create markers with labels
var branch1Marker = createMarker(branch1Coords, 'Branch 1', 'Your Branch 1 Description');
var branch2Marker = createMarker(branch2Coords, 'Branch 2', 'Your Branch 2 Description');

function createMarker(coordinates, label, description) {
    // Create a marker
    var marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

    // Create a popup with label and description
    var popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${label}</h3><p>${description}</p>`);

    // Make the popup appear when the marker is clicked
    marker.setPopup(popup);

    // Make the popup appear immediately when the map loads
    popup.addTo(map);

    return marker;
}

// Add event listeners to buttons
document.getElementById('branch1').addEventListener('click', function() {
    // Change to branch 1 coordinates
    map.flyTo({
        center: branch1Coords,
        zoom: 14
    });
});

document.getElementById('branch2').addEventListener('click', function() {
    // Change to branch 2 coordinates
    map.flyTo({
        center: branch2Coords,
        zoom: 14
    });
});