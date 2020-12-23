const testplanet = new JavaAdapter(Planet, {}, "tesplanet", Planets.serpulo, 4, 0.7);
testplanet.localizedName = "Red Moon base";
testplanet.orbitRadius = 4.0;
testplanet.meshLoader = () => new SunMesh(mercury, 4, 5, 0.3, 1.7, 1.2, 1, 1.5, Color.valueOf("202020"), Color.valueOf("161616"), Color.valueOf("101010"));
testplanet.accessible = true;
testplanet.hasAtmosphere = true;
testplanet.generator = new SerpuloPlanetGenerator();
testplanet.bloom = true;
testplanet.radius = 3;
testplanet.accessible = true;
testplanet.hasAtmosphere = true;
testplanet.atmosphereColor = Color.valueOf("80ff00");
testplanet.atmosphereRadIn = 0.2;
testplanet.atmosphereRadOut = 0.7;

//Planet sector pressets
const zonetest1 = new JavaAdapter(SectorPreset, {}, "zonetest1", Planets.testplanet, 1);
zonetest1.difficulty = 12;
zonetest1.captureWave = 25;
zonetest1.localizedName = "Flyn base";
zonetest1.alwaysUnlocked = true;
