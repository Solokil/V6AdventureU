//Test planet 1

const generator = extend(SerpuloPlanetGenerator, {});
generator.dec = ObjectMap.of(Blocks.grass, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.water, Blocks.water, Blocks.darksandWater, Blocks.darksandWater);
generator.tars = ObjectMap.of(Blocks.grass, Blocks.shale, Blocks.dirt, Blocks.shale);

const testplanet = new Planet("templura", Planets.serpulo, 0.7, 0.5); //4, 0.7
testplanet.localizedName = "First Moon base";
testplanet.orbitRadius = 4.0;
testplanet.meshLoader = () => new SunMesh(testplanet, 4, 3, 0.4, 1.8, 1.2, 0.5, 0.4, Color.valueOf("f5d300"), Color.valueOf("74737a"), Color.valueOf("00aSe3"));
testplanet.accessible = true;
testplanet.hasAtmosphere = true;
testplanet.generator = generator;
testplanet.bloom = false;
testplanet.radius = 1;
testplanet.hasAtmosphere = true;
testplanet.atmosphereColor = Color.valueOf("80ff00");
testplanet.atmosphereRadIn = 0.1;
testplanet.atmosphereRadOut = 0.2;

//Planet sector pressets
const zonetest1 = new SectorPreset("zonetest1", testplanet, 1);
zonetest1.difficulty = 12;
zonetest1.captureWave = 25;
zonetest1.localizedName = "Flyn base";
zonetest1.alwaysUnlocked = true;
/*zonetest1.objectives = Seq.with(
  new Objectives.SectorComplete(SectorPresets.groundZero),
  new Objectives.Research(Vars.content.getByName(ContentType.block, "V6AdventureU-0001-ironite-compress")),
  //new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldForge")),
  //new Objectives.Research(Blocks.laserDrill)
);*/
const zonetest2 = new SectorPreset("zonetest1", testplanet, 2);
zonetest2.difficulty = 12;
zonetest2.captureWave = 25;
zonetest2.localizedName = "Flyn base unlo";
zonetest2.alwaysUnlocked = true;
/*zonetest2.objectives = Seq.with(
  new Objectives.SectorComplete(SectorPresets.groundZero),
  new Objectives.Research(Vars.content.getByName(ContentType.block, "V6AdventureU-0001-ironite-compress")),
  //new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldForge")),
  //new Objectives.Research(Blocks.laserDrill)
);*/
//const zone1 = Vars.content.getByName(ContentType.sector, "V6AdventureU-zonetest1");
// newNode(zone1, groundZero, null, Seq.with(new Objectives.SectorComplete(SectorPresets.groundZero), new Objectives.Research(Blocks.launchPad)));
   

function newNode(content, parentName, req, objectives){
  var parent = TechTree.all.find(t => t.content.name.equals(parentName));

  var node = new TechTree.TechNode(parent, content, req);
  node.objectives.add(objectives);
  
  parent.children.add(node);
}

const testplanetmoon = new Planet("testplanetmoon", Planets.testplanet, 0.7, 0.5); //4, 0.7
testplanet.localizedName = "moon test";
testplanet.orbitRadius = 1.5;
testplanet.meshLoader = () => new SunMesh(testplanet, 4, 3, 0.4, 1.8, 1.2, 0.5, 0.4, Color.valueOf("f5d300"), Color.valueOf("74737a"), Color.valueOf("00aSe3"));
testplanet.accessible = false;
testplanet.hasAtmosphere = false;
testplanet.generator = generator;
testplanet.bloom = false;
testplanet.radius = 0.2;
testplanet.hasAtmosphere = true;
testplanet.atmosphereColor = Color.valueOf("80ff00");
testplanet.atmosphereRadIn = 0.1;
testplanet.atmosphereRadOut = 0.2;

const testplanetmoon2 = new Planet("testplanetmoon2", Planets.testplanet, 0.7, 0.5); //4, 0.7
testplanet.localizedName = "moon test 2";
testplanet.orbitRadius = 1.3;
testplanet.meshLoader = () => new SunMesh(testplanet, 4, 3, 0.4, 1.8, 1.2, 0.5, 0.4, Color.valueOf("f5d300"), Color.valueOf("74737a"), Color.valueOf("00aSe3"));
testplanet.accessible = false;
testplanet.hasAtmosphere = true;
testplanet.generator = generator;
testplanet.bloom = false;
testplanet.radius = 0.2;
testplanet.hasAtmosphere = true;
testplanet.atmosphereColor = Color.valueOf("80ff00");
testplanet.atmosphereRadIn = 0.01;
testplanet.atmosphereRadOut = 0.05;
