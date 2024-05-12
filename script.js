var currentImages = {
    "bruno": "BRUNO MARS.png",
    "kanye": "KANYE WEST.png",
    "adele": "ADELE.png",
    "ariana": "ARIANA GRANDE.png",
    "beyonce": "BEYONCE.png",
    "harry": "HARRY STYLES.png",
    "justin": "JUSTIN BIEBER.png",
    "taylor": "TAYLOR SWIFT.png",
    "weeknd": "THE WEEKND.png"
    // Add more artists here
};

function changeImage(id) {
    var image = document.getElementById(id.toLowerCase());
    var artist = id.toLowerCase();

    // Toggle between image sources
    if (currentImages[artist] === "BRUNO MARS.png") {
        image.src = "브루노마스.png";
        currentImages[artist] = "브루노마스.png";
        var brunoKMusic = document.getElementById('brunoKMusic');
        brunoKMusic.play();
    }    else if (currentImages[artist] === "브루노마스.png") {
            image.src = "BRUNO MARS.png";
            currentImages[artist] = "BRUNO MARS.png";
            var brunoMusic = document.getElementById('brunoMusic');
            brunoMusic.play();
    } else if (currentImages[artist] === "KANYE WEST.png") {
        image.src = "칸예.png";
        currentImages[artist] = "칸예.png";
        var kanyeKMusic = document.getElementById('kanyeKMusic');
        kanyeKMusic.play();
    } else if (currentImages[artist] === "칸예.png") {
        image.src = "KANYE WEST.png";
        currentImages[artist] = "KANYE WEST.png";
        var kanyeMusic = document.getElementById('kanyeMusic');
        kanyeMusic.play();
    } else if (currentImages[artist] === "ADELE.png") {
        image.src = "아델.png";
        currentImages[artist] = "아델.png";
        var adeleKMusic = document.getElementById('adeleKMusic');
        adeleKMusic.play();
    } else if (currentImages[artist] === "아델.png") {
        image.src = "ADELE.png";
        currentImages[artist] = "ADELE.png";
        var adeleMusic = document.getElementById('adeleMusic');
        adeleMusic.play();
    } else if (currentImages[artist] === "ARIANA GRANDE.png") {
        image.src = "아리아나.png";
        currentImages[artist] = "아리아나.png";
        // Play the music when Ariana Grande image is clicked
        var arianaKMusic = document.getElementById('arianaKMusic');
        arianaKMusic.play();
    } else if (currentImages[artist] === "아리아나.png") {
        image.src = "ARIANA GRANDE.png";
        currentImages[artist] = "ARIANA GRANDE.png";
        var arianaMusic = document.getElementById('arianaMusic');
        arianaMusic.play();
    } else if (currentImages[artist] === "BEYONCE.png") {
        image.src = "비욘새.png";
        currentImages[artist] = "비욘새.png";
        var beyonceKMusic = document.getElementById('beyonceKMusic');
        beyonceKMusic.play();
    } else if (currentImages[artist] === "비욘새.png") {
        image.src = "BEYONCE.png";
        currentImages[artist] = "BEYONCE.png";
        var beyonceMusic = document.getElementById('beyonceMusic');
        beyonceMusic.play();
    } else if (currentImages[artist] === "HARRY STYLES.png") {
        image.src = "해리.png";
        currentImages[artist] = "해리.png";
        var harryKMusic = document.getElementById('harryKMusic');
        harryKMusic.play();
    } else if (currentImages[artist] === "해리.png") {
        image.src = "HARRY STYLES.png";
        currentImages[artist] = "HARRY STYLES.png";
        var harryMusic = document.getElementById('harryMusic');
        harryMusic.play();
    } else if (currentImages[artist] === "JUSTIN BIEBER.png") {
        image.src = "저스틴.png";
        currentImages[artist] = "저스틴.png";
        var justinKMusic = document.getElementById('justinKMusic');
        justinKMusic.play();
        // Play the music when Justin Bieber image is clicked
        
    } else if (currentImages[artist] === "저스틴.png") {
        image.src = "JUSTIN BIEBER.png";
        currentImages[artist] = "JUSTIN BIEBER.png";
        var justinMusic = document.getElementById('justinMusic');
        justinMusic.play();
    } else if (currentImages[artist] === "TAYLOR SWIFT.png") {
        image.src = "테일러.png";
        currentImages[artist] = "테일러.png";
        var taylorKMusic = document.getElementById('taylorKMusic');
        taylorKMusic.play();
    } else if (currentImages[artist] === "테일러.png") {
        image.src = "TAYLOR SWIFT.png";
        currentImages[artist] = "TAYLOR SWIFT.png";
        var taylorMusic = document.getElementById('taylorMusic');
        taylorMusic.play();
    } else if (currentImages[artist] === "THE WEEKND.png") {
        image.src = "위켄드.png";
        currentImages[artist] = "위켄드.png";
        var weekndKMusic = document.getElementById('weekndKMusic');
        weekndKMusic.play();
    } else if (currentImages[artist] === "위켄드.png") {
        image.src = "THE WEEKND.png";
        currentImages[artist] = "THE WEEKND.png";
        var weekndMusic = document.getElementById('weekndMusic');
        weekndMusic.play();
    }
}
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '⋆';
    snowflake.style.left = Math.random() * 150 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random duration between 5s to 10s
    snowflake.style.fontSize = Math.random() * 500 + 10 + 'px'; // Random size between 10px to 30px
    document.body.appendChild(snowflake);
    setTimeout(() => {
      snowflake.remove();
    }, 10000); // Remove snowflake after 10 seconds
  }
  
  setInterval(createSnowflake, 300);

  document.getElementById("popupButton").addEventListener("click", function() {
    // Set the source of the popup image to "SAVE.png"
    document.getElementById("popupImage").src = "SAVE.png";
    // Display the popup container
    document.getElementById("popupContainer").style.display = "block";
});

document.getElementById("popupContainer").addEventListener("click", function(e) {
    if (e.target.id === "popupContainer") {
        // Hide the popup container when clicking outside the image
        document.getElementById("popupContainer").style.display = "none";
    }
});
document.getElementById("popupButton2").addEventListener("click", function() {
    // Set the source of the popup image to "SAVE.png"
    document.getElementById("popupImage2").src = "sponsor.png";
    // Display the popup container
    document.getElementById("popupContainer2").style.display = "block";
});

document.getElementById("popupContainer2").addEventListener("click", function(e) {
    if (e.target.id === "popupContainer2") {
        // Hide the popup container when clicking outside the image
        document.getElementById("popupContainer2").style.display = "none";
    }
});
    