// POSTERS
// One entry per poster on the column. Placement is in column-local space:
// the origin is the center of the body, and the column's axis is the y axis.
//
// CONVENTIONS
// - angle: radians. 0 faces +z (toward the camera at start), increasing
//   toward +x. Write it as Math.PI * 2 * fraction of a full turn.
// - y: world units, measured from the body center (positive is up).
// - width, fontSize: world units.
//
// SHARED FIELDS
// - id:       unique string, used as the React key
// - type:     "image" | "text"
// - position: { angle, y }
// - layer:    whole number, 1 or more. Sets how far the poster sits above the
//             surface (radius = body radius + layer * layerStep).
//
// IMAGE FIELDS
// - width: width in world units. The height follows the image's aspect ratio.
// - path:  image file in /public, for example "/posters/ocean.png"
//
// TEXT FIELDS
// - text:     the string to render
// - fontSize: glyph size in world units
//
// RULES
// - Higher layers sit above lower ones where posters overlap.
// - Never use layer 0: it sits exactly on the body and z-fights.
// - Text placed over a poster needs a layer above that poster.
// - Keep width below the circumference (2π × radius), or the poster
//   overlaps itself.
// - Posters are placed by hand: check that they don't run over the cap or base.

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
    layer: 2,
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
    layer: 1,
  },
  {
    id: "tiny-text",
    type: "text",
    position: {
      angle: Math.PI * 2 * 0.1,
      y: 1.4,
    },
    fontSize: 0.5,
    text: "Hi!",
    layer: 1,
  },
  {
    id: "small-text",
    type: "text",
    position: {
      angle: Math.PI * 2 * 0.05,
      y: 1,
    },
    fontSize: 0.3,
    text: "Hello!",
    layer: 1,
  },
  {
    id: "medium-text",
    type: "text",
    position: {
      angle: Math.PI * 2 * 0.05,
      y: 0.7,
    },
    fontSize: 0.3,
    text: "Hello, there!",
    layer: 1,
  },
  {
    id: "long-text",
    type: "text",
    position: {
      angle: Math.PI * 2 * 0.05,
      y: 0.4,
    },
    fontSize: 0.3,
    text: "Hello, there! My name is Manuel.",
    layer: 3,
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
    layer: 1,
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
    layer: 1,
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
    layer: 1,
  },
];

export default posters;
