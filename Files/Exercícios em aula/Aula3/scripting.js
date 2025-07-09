var glviewer = null;
/* Load default PDB  */
document.onload = readPDB("https://files.rcsb.org/download/1BGA.pdb");

// Reading PDB
function readPDB(id) {
  var txt = id;
  $.get(txt, function (d) {
    moldata = data = d;
    // Cria visualizacao
    glviewer = $3Dmol.createViewer("pdb", {
      defaultcolors: $3Dmol.rasmolElementColors,
    });
    // Add this check to ensure glviewer is initialized
    if (!glviewer) {
      console.error("Failed to create 3Dmol viewer.");
      // Handle the error appropriately, e.g., return or show a message
      return;
    }
    // Define cor do fundo
    // glviewer.setBackgroundColor(0x242830);
    receptorModel = m = glviewer.addModel(data, "pqr");
    // Define o tipo de visualizacao
    glviewer.setStyle({}, { cartoon: { color: "spectrum" } }); // Cartoon multi—color
    glviewer.addSurface($3Dmol.SurfaceType, { opacity: 0.3 }); // Surface

    // Define os nomes do atomos
    // var
    atoms = m.selectedAtoms({});
    for (let i in atoms) {
      let atom = atoms[i];
      atom.clickable = true;
      atom.callback = atomcallback;
    }
    glviewer.mapAtomProperties($3Dmol.applyPartialCharges);
    glviewer.zoomT0();
    glviewer.render();
  });
}
