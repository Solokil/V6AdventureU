const testplanet = new JavaAdapter(Planet, {}, "Moon base", Planets.serpulo, 4, 0.7);
mercury.orbitRadius = 4.0;
mercury.meshLoader = () => new SunMesh(mercury, 4, 5, 0.3, 1.7, 1.2, 1, 1.5, Color.valueOf("202020"), Color.valueOf("161616"), Color.valueOf("101010"));
mercury.accessible = true;
mercury.hasAtmosphere = true;


//Planet sector pressets
const zonetest1 = new JavaAdapter(SectorPreset, {}, "zonetest1", Planets.testplanet, 1);
zonetest1.difficulty = 12;
