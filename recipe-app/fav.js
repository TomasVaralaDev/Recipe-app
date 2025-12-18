document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".fav-btn");
  
    // Hae tallennetut suosikit
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  
    // Aseta sydämen ulkonäkö aluksi
    buttons.forEach(btn => {
      const id = btn.dataset.id;
      if (favorites.includes(id)) {
        btn.textContent = "♥";
        btn.classList.add("text-pink-500");
      } else {
        btn.textContent = "♡";
        btn.classList.remove("text-pink-500");
      }
  
      // Klikkaustoiminto
      btn.addEventListener("click", () => {
        if (favorites.includes(id)) {
          favorites = favorites.filter(fav => fav !== id);
          btn.textContent = "♡";
          btn.classList.remove("text-pink-500");
        } else {
          favorites.push(id);
          btn.textContent = "♥";
          btn.classList.add("text-pink-500");
        }
  
        localStorage.setItem("favorites", JSON.stringify(favorites));
      });
    });
  });
  