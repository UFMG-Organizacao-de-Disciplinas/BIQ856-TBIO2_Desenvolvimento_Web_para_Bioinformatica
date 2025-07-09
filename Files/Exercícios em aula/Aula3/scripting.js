var glviewer = null;

// Aguarda o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Aguarda um pouco para garantir que o 3Dmol.js está carregado
  setTimeout(function () {
    readPDB("https://files.rcsb.org/download/1BGA.pdb");
  }, 100);
});

// Reading PDB
function readPDB(id) {
  var txt = id;

  // Verifica se o 3Dmol está disponível
  if (typeof $3Dmol === "undefined") {
    console.error("3Dmol.js não está carregado!");
    return;
  }

  // Verifica se o elemento existe
  var containerElement = document.getElementById("PDB");
  if (!containerElement) {
    console.error("Elemento com ID 'PDB' não encontrado!");
    return;
  }

  $.get(txt, function (d) {
    moldata = data = d;

    // Cria visualizacao com o ID correto
    glviewer = $3Dmol.createViewer("PDB", {
      defaultcolors: $3Dmol.rasmolElementColors,
    });

    // Verifica se o viewer foi criado
    if (!glviewer) {
      console.error("Failed to create 3Dmol viewer.");
      return;
    }

    console.log("3Dmol viewer criado com sucesso!");

    // Define cor do fundo
    // glviewer.setBackgroundColor(0x242830);
    receptorModel = m = glviewer.addModel(data, "pdb"); // Mudança: "pqr" para "pdb"

    // Define o tipo de visualizacao
    glviewer.setStyle({}, { cartoon: { color: "spectrum" } });
    glviewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.3 }); // Correção na superfície

    // Define os nomes dos atomos
    atoms = m.selectedAtoms({});
    for (let i in atoms) {
      let atom = atoms[i];
      atom.clickable = true;
      atom.callback = atomcallback;
    }

    glviewer.mapAtomProperties($3Dmol.applyPartialCharges);
    glviewer.zoomTo();
    glviewer.render();
  }).fail(function () {
    console.error("Falha ao carregar o arquivo PDB!");
  });
}

// Função de callback para atoms (adicione se não existir)
function atomcallback(atom, viewer) {
  console.log("Atom clicked:", atom);
}
