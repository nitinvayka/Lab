 function loadImages() {
      const gallery = document.getElementById("gallery");
      gallery.innerHTML = ""; 
      for (let i = 0; i < 10; i++) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/200/150?random=${Math.random()}`;
        img.alt = "Random Image";
        gallery.appendChild(img);
      }
    }