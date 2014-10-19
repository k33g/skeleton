/* mini mini jQuery */
let q = (selector) => {

  var nodes = Array.from(document.querySelectorAll(selector));

  if (nodes.length == 1) {
    nodes = nodes[0];
  } else {

    Object.assign(nodes, {
      first ()  { return this[0]; },
      last () { return this[this.length-1]; }
    });
  }

  nodes.find = q;

  return nodes;
}

export default q;