function effacerContenu() {
    var zoneTexte = document.getElementById("zone-texte");
    var contenu = zoneTexte.value;
    
    if (contenu.trim() !== "") {
      var confirmation = confirm("Êtes-vous sûr de vouloir effacer le contenu ?");
      
      if (confirmation) {
        zoneTexte.value = "";
        
        // Ajouter le contenu effacé à l'historique
        var historique = document.getElementById("historique");
        var nouvelElement = document.createElement("li");
        nouvelElement.textContent = contenu;
        historique.appendChild(nouvelElement);
      }
    }
  }
  