// angle (radians, with 0 at +z, increasing toward +x)
// y is in world units from the body center
// width is in world units, height comes from image

const posters = [
  {
    id: "really-big-poster",
    type: "image",
    width: 3,
    position: {
      angle: Math.PI * 2 * 0.7,
      y: -0.2,
    },
    path: "/posters/ocean.png",
  },
  {
    id: "regular-poster",
    type: "image",
    width: 1,
    position: {
      angle: Math.PI * 2 * 0.01,
      y: -1,
    },
    path: "/posters/ocean.png",
  },
  {
    id: "first-name",
    type: "text",
    position: {
      angle: Math.PI * 2 * 0.1,
      y: 1,
    },
    scale: 0.5,
    text: "Manuel",
  },
  {
    id: "last-name",
    type: "text",
    position: {
      angle: Math.PI * 2 * 0.05,
      y: 0.5,
    },
    scale: 0.3,
    text: "Annabring",
  },
  {
    id: "tiny-poster",
    type: "image",
    width: 0.1,
    position: {
      angle: Math.PI * 2 * 1.2,
      y: 1,
    },
    path: "/posters/trees.png",
  },
  {
    id: "large-poster",
    type: "image",
    width: 2,
    position: {
      angle: Math.PI * 2 * 0.3,
      y: 0,
    },
    path: "/posters/ocean.png",
  },
  {
    id: "small-poster",
    type: "image",
    width: 0.5,
    position: {
      angle: Math.PI * 2 * 0.4,
      y: 0.3,
    },
    path: "/posters/trees.png",
  },
];

export default posters;
