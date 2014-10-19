import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';
import HumansList from 'js/app/views/HumansList';
import HumanForm from 'js/app/views/HumanForm';
import $q from 'js/skeleton/selector';

import Router from 'js/skeleton/Router';

let fringeDivision = new Humans();

let humansList = new HumansList(fringeDivision);
let humanForm = new HumanForm(fringeDivision);


fringeDivision.fetch();

let router = new Router();


QUnit.test("Create Router and add routes", ( assert ) => {

  /*
   <ul id="menu">
    <li><a href="#/toggle/form">Toggle Form</a></li>
    <li><a href="#/toggle/list">Toggle List</a></li>
   </ul>
   */

  router
    .add("toggle", (args) => {
      switch(args[0]) {
        case "form":
          humanForm.toggle();
          break;
        case "list":
          humansList.toggle();
          break;
        default:
          //foo
      }
    })
    .add("/", (args) => {
      $q("h1").first().innerHTML = "Welcome Page";
    });

  router.listen()

  assert.ok(router.routes.get("toggle") !==undefined,"add toggle/* routes");
  assert.ok(router.routes.get("/") !==undefined,"add other /* routes");
});











