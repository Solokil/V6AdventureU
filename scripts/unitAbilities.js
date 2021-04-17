

///Flying Units///
/*F1 unit*/

///End Flying Units///

///Ground Units///
const gf1_tanker = extendContent(UnitType, "030035-iri-tanker", {});

gf1_tanker.constructor = function(){
  return extend(PayloadUnit, {});
};
gf1_tanker.abilities.add(new ForceFieldAbility(30, 4, 100, 1200));

///End Ground Units///
