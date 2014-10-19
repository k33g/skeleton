var traceur = require('traceur');

traceur.require.makeDefault(function(filename) {
  // je ne transpile que les fichiers de mon application
  // donc tout ce qui est dans "node_modules" (les dépendances) je ne les transpile pas
  var isApplicationFile = filename.indexOf('node_modules') === -1

  if(isApplicationFile) {
    console.log("->",filename)
  }
  return isApplicationFile;
});

/* charger app.js */
console.log("Chargement de app.js");
require("./app");

/* === explications ===
 https://github.com/google/traceur-compiler/wiki/Using-Traceur-with-Node.js
*/

