//Test planet 1

const generator = extend(SerpuloPlanetGenerator, {});
generator.dec = ObjectMap.of(Blocks.grass, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.water, Blocks.water, Blocks.darksandWater, Blocks.darksandWater);
generator.tars = ObjectMap.of(Blocks.grass, Blocks.shale, Blocks.dirt, Blocks.shale);

const testplanet = new JavaAdapter(Planet, {}, "tesplanet", Planets.serpulo, 2, 0.8); //4,0.7
testplanet.localizedName = "First Moon base";
testplanet.orbitRadius = 4.0;
testplanet.meshLoader = () => new SunMesh(testplanet, 4, 5, 0.3, 0.7, 0.6, 0.5, 0.4, Color.valueOf("f5d300"), Color.valueOf("74737a"), Color.valueOf("00aSe3"));
testplanet.accessible = true;
testplanet.hasAtmosphere = true;
testplanet.generator = generator;
testplanet.bloom = false;
testplanet.radius = 0.4;
testplanet.hasAtmosphere = true;
testplanet.atmosphereColor = Color.valueOf("80ff00");
testplanet.atmosphereRadIn = 0.1;
testplanet.atmosphereRadOut = 0.2;

//Planet sector pressets
const zonetest1 = new JavaAdapter(SectorPreset, {}, "zonetest1", Planets.testplanet, 1);
zonetest1.difficulty = 12;
zonetest1.captureWave = 25;
zonetest1.localizedName = "Flyn base";
zonetest1.alwaysUnlocked = false;
zonetest1.objectives = Seq.with(
  new Objectives.SectorComplete(SectorPresets.groundZero),
  new Objectives.Research(Vars.content.getByName(ContentType.block, "V6AdventureU-0001-ironite-compress")),
  //new Objectives.Research(Vars.content.getByName(ContentType.block, "goldmod-goldForge")),
  //new Objectives.Research(Blocks.laserDrill)
);
const zone1 = Vars.content.getByName(ContentType.sector, "V6AdventureU-zonetest1");
   Load(){
    newNode(zone1, groundZero, null, Seq.with(new Objectives.SectorComplete(SectorPresets.groundZero), new Objectives.Research(Blocks.launchPad)));
   },

function newNode(content, parentName, req, objectives){
  var parent = TechTree.all.find(t => t.content.name.equals(parentName));

  var node = new TechTree.TechNode(parent, content, req);
  node.objectives.add(objectives);
  
  parent.children.add(node);
}

