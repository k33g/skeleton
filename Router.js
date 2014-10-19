
class Router {

  constructor () {
    this.routes = new Map();
  }

  add (uri, action) {
    this.routes.set(uri, action);
    return this;
  }

  match (uri) {

    // on retraite l'uri: enlever les #/
    uri = uri.replace("#\/","");

    // splitter uri avec "/" et ne garder que les éléments non vides
    let uriParts = uri.split("/").filter((part)=>part.length>0);

    // clé à chercher
    let route = uriParts[0];
    // paramètres à passer à la méthode
    let params = uriParts.slice(1);

    // récupérer la méthode
    let method = this.routes.get(route);

    // exécuter la méthode
    if (method) {
      method(params)
    } else {
      this.routes.get("/")(params)
    }
  }

  listen () {
    // une fois le routeur en mode écoute
    // lui faire vérifier une 1ère fois l'url pour déterminer quoi faire
    this.match(window.location.hash);

    /* s'abonner à onpopstate */
    window.onpopstate = (event) => {
      this.match(window.location.hash);
    };
  }

}

export default Router