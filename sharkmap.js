import * as globeletjs from "https://unpkg.com/globeletjs@latest/dist/globelet.js";
const params = { container: 'globe',
style: "./klokantech-basic-style-geojson.json",
center: [-100, 38.5],
altitude: 6280,
};
const globePromise = globeletjs.initGlobe(params);