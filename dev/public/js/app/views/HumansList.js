
import View from '../../skeleton/View';
import $q from '../../skeleton/selector';

class HumansList extends View {

  constructor (humansCollection) {

    super({
      collection: humansCollection,
      element: $q("#humans-list")
    });

    // afficher la liste lorsque la collection est "chargée" à partir du serveur
    // la collection est chargée lorsque l'on appelle la méthode fetch() de celle-ci
    this.listen(humansCollection, (context) => {
      if (context.event == "fetch") {
        this.render();
      }
    })

  }

  // on affiche en plus l'id du modèle
  template (humans) {
    return `
      <ul>${
      humans.models.map(
        (human) => `<li>${human.id()} - ${human.get("firstName")}, ${human.get("lastName")}</li>`
      ).join("")
      }</ul>
    `;
  }

  render () {
    this.html(this.template(this.collection));
  }

}

export default HumansList;