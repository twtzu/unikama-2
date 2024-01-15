console.log("Inline script is loaded!");

// Listen to scroll events
// $(document).ready(function() {
//     $(window).scroll(function() {
//         // Get the current scroll position
//         var scrollPos = $(this).scrollTop();
//         if (scrollPos > 530) {
//             $('.main-navigation-display').addClass('sticky');

//             // Modify font size and padding when scroll position exceeds 500 pixels
//             $('.subnav').css({
//                 'font-size': '10px',
//                 'padding': '2px 8px 4px 6px'
//             });


//         } else {
//             $('.main-navigation-display').removeClass('sticky');

//             // Reset font size and padding when scroll position is less than or equal to 500 pixels
//             $('.subnav').css({
//                 'font-size': '15px',
//                 'padding': '6px 12px 8px 10px'
//             });

//         }
//         console.log("Scroll Position:", scrollPos);
//     });
// });
document.getElementById('logoImg').addEventListener('click', function() {
    var mainNav = document.getElementById('mainNav');
    mainNav.classList.toggle('expanded');
});

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
            <img src="img/chicken.png" alt="...">
          </div>
          <div class="info-product">
            <h2>Ayam Geprek</h2>
            <p><strong>Harga: </strong>Rp. 15.000</p>
            <p><strong>Pendamping:  </strong>Sambal, aneka sayur</p>
            <p>Ayam Geprek kami adalah sajian yang memuaskan untuk para pencinta pedas yang mencari petualangan rasa yang menggembirakan di tiap tingkatan pedasnya. </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="image-product">
            <img src="img/catfish.png" alt="...">
          </div>
          <div class="info-product">
            <h2>Lele Goreng</h2>
            <p><strong>Harga: </strong>Rp. 15.000</p>
            <p><strong>Pendamping:  </strong>Sambal, aneka sayur</p>
            <p>Lele Goreng yang digoreng langsung saat dipesan memastikan kesegaran di tiap penyajiannya, ditemani dengan lalapan dan sambal yang semakin menambah kenikmatan.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="image-product">
            <img src="img/fish.png" alt="...">
          </div>
          <div class="info-product">
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
            <img src="img/tea.png" alt="...">
          </div>
          <div class="info-product">
            <h2>Teh</h2>
            <p><strong>Harga: </strong>Rp. 15.000</p>
            <p>Deskripsi Teh</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="image-product">
            <img src="img/coffee.png" alt="...">
          </div>
          <div class="info-product">
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

// Add event listeners to buttons
document.getElementById('branch1').addEventListener('click', function() {
    // Change to initial center coordinates
    map.flyTo({
        center: [115.225019, -8.654076], // initial center coordinates
        zoom: 14
    });
});

document.getElementById('branch2').addEventListener('click', function() {
    // Change to Malang coordinates (replace with actual Malang coordinates)
    map.flyTo({
        center: [112.6338, -7.9675], // Malang coordinates
        zoom: 14
    });
});
$(document).ready(function() {
    var navigation = $('.main-navigation-display');
    var subnavItems = navigation.find('.subnav:not(.logo-subnav)');

    // Function to toggle collapse based on window width
    function toggleCollapse() {
        if (window.innerWidth <= 767) {
            navigation.addClass('collapsed');
            subnavItems.hide();
        } else {
            navigation.removeClass('collapsed');
            subnavItems.show();
        }
    }
})