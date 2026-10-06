// angle (radians, with 0 at +z, increasing toward +x)
// y is in world units from the body center

const posters = [
  {
    id: "really-big-poster",
    type: "image",
    size: {
      width: 8,
      height: 0.2,
    },
    position: {
      angle: Math.PI * 2 * 0,
      y: 1.5,
    },
    path: "/posters/ocean.png",
  },
  {
    id: "project-ocean",
    type: "image",
    size: {
      width: 1,
      height: 2,
    },
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
      angle: Math.PI * 2 * 0.05,
      y: 1,
    },
    scale: 0.5,
    text: "Manuel"
  },
  {
    id: "last-name",
    type: "text",
    position: {
      angle: Math.PI * 2 * 0.05,
      y: 0.5,
    },
    scale: 0.3,
    text: "Annabring"
  },
  {
    id: "project-trees",
    type: "image",
    size: {
      width: 0.1,
      height: 0.4,
    },
    position: {
      angle: Math.PI * 2 * 0.8,
      y: 1,
    },
    path: "/posters/trees.png",
  },
  {
    id: "some-project",
    type: "image",
    size: {
      width: 2,
      height: 1,
    },
    position: {
      angle: Math.PI * 2 * 0.3,
      y: 0,
    },
    path: "/posters/ocean.png",
  },
  {
    id: "another-project",
    type: "image",
    size: {
      width: 0.5,
      height: 3,
    },
    position: {
      angle: Math.PI * 2 * 0.4,
      y: 0.3,
    },
    path: "/posters/trees.png",
  },
];

export default posters;
