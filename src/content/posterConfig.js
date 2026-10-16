const poster = {
  layerStep: 0.003, // avoid z-fighting between column body and posters, set a layer per poster
  imageRadialSegmentsMin: 2,
  imageRadialSegmentsPerRadian: 10,
  textGlyphDetail: 2, // glyphGeometryDetail: subdivides each letter so it follows the curve
  clickDragThreshold: 5,
};

export default poster;
