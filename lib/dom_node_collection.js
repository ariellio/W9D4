class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

 

  on(eventName, callback) {
    this.each((node) => {
      node.addEventListener(eventName, callback);
      const eventKey = `jqliteEvents-${eventName}`;
      if (typeof node[eventKey] === "undefined") {
        node[eventKey] = [];
      }
      node[eventKey].push(callback);
    });
  }

 
}

module.exports = DomNodeCollection;
