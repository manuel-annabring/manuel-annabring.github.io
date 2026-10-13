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
// - url:      optional. Makes the poster clickable: opens in a new tab and
//             shows a pointer cursor on hover. Posters without it are inert.
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

import { MathUtils } from "three";

const posters = [
  {
    id: "name",
    type: "image",
    width: 1.8,
    position: {
      angle: MathUtils.degToRad(30),
      y: 0.44,
    },
    path: "/posters/name.png",
    layer: 1,
  },
  {
    id: "github",
    type: "image",
    width: 0.57,
    position: {
      angle: MathUtils.degToRad(5),
      y: -1.28,
    },
    path: "/posters/github.png",
    layer: 1,
    url: "https://github.com/manuel-annabring",
  },
  {
    id: "x",
    type: "image",
    width: 0.57,
    position: {
      angle: MathUtils.degToRad(30),
      y: -1.28,
    },
    path: "/posters/x.png",
    layer: 1,
    url: "https://x.com/manuelannabring",
  },
  {
    id: "linkedin",
    type: "image",
    width: 0.57,
    position: {
      angle: MathUtils.degToRad(55),
      y: -1.28,
    },
    path: "/posters/linkedin.png",
    layer: 1,
    url: "https://linkedin.com/in/manuel-annabring",
  },
  {
    id: "mannabri",
    type: "image",
    width: 1.75,
    position: {
      angle: MathUtils.degToRad(110),
      y: 1.37,
    },
    path: "/posters/mannabri.png",
    layer: 2,
    url: "https://mannabri.de",
  },
  {
    id: "wheelie-tracker",
    type: "image",
    width: 1.75,
    position: {
      angle: MathUtils.degToRad(110),
      y: -0.35,
    },
    path: "/posters/wheelie-tracker.png",
    layer: 2,
    url: "https://apps.apple.com/app/my-wheelie-tracker/id6781165193",
  },
  {
    id: "ui-catalog",
    type: "image",
    width: 1.3,
    position: {
      angle: MathUtils.degToRad(175),
      y: 0.72,
    },
    path: "/posters/ui-catalog.png",
    layer: 2,
    url: "https://apps.apple.com/de/app/ui-catalog-for-swiftui/id6788291355",
  },
  // {
  //   id: "medium-text",
  //   type: "text",
  //   position: {
  //     angle: Math.PI * 2 * 0.05,
  //     y: 0.7,
  //   },
  //   fontSize: 0.3,
  //   text: "Hello, there!",
  //   layer: 1,
  // },
];

export default posters;
