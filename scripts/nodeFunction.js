function newNode(content, parentName, req, objectives){
  var parent = TechTree.all.find(t => t.content.name.equals(parentName));

  var node = new TechTree.TechNode(parent, content, req);
  node.objectives.add(objectives);
  
  parent.children.add(node);
}
