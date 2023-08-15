const SVG_Filters = () => {
  const SharpenFilter = () => (
    <filter id="sharpen">
      <feConvolveMatrix
        order="3"
        divisor="1"
        kernelMatrix="0 -1 0 -1 5 -1 0 -1 0"
      />
    </filter>
  );

  const InvertFilter = () => (
    <filter id="invert">
      <feColorMatrix
        type="matrix"
        values="-1   0   0   0   1  0  -1   0   0   1  0   0  -1   0   1   0   0   0   1   0"
      />
    </filter>
  );

  const GammaFilter = () => (
    <filter id="gamma">
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 1 0"
      />
    </filter>
  );

  const GrayscaleFilter = () => (
    <svg width="0" height="0">
      <filter id="grayscale">
        <feColorMatrix
          type="matrix"
          values="
          0.33 0.33 0.33 0 0
          0.33 0.33 0.33 0 0
          0.33 0.33 0.33 0 0
          0    0    0    1 0"
        />
      </filter>
    </svg>
  );

  const SepiaFilter = () => (
    <filter id="sepia">
      <feColorMatrix
        type="matrix"
        values="
      0.272 0.534 0.131 0 0
      0.349 0.686 0.168 0 0
      0.393 0.769 0.189 0 0
      0     0     0     1 0"
      />
    </filter>
  );

  const NegativeFilter = () => (
    <filter id="negative">
      <feColorMatrix
        type="matrix"
        values="-1 0 0 0 1
               0 -1 0 0 1
               0 0 -1 0 1
               0 0 0 1 0"
      />
    </filter>
  );

  const LarkFilter = () => (
    <filter id="lark">
      <feColorMatrix
        type="matrix"
        values="1.2 0.1 0.1 0 0
                0.1 1.2 0.1 0 0
                0.1 0.1 1.2 0 0
                0   0   0   1 0"
      />
    </filter>
  );

  const BokehFilter = () => (
    <filter id="bokeh">
      <feColorMatrix
        type="matrix"
        values="1.2 0   0   0 0
                0   1.1 0   0 0
                0   0   1.1 0 0
                0   0   0   1 0"
      />
      <feGaussianBlur stdDeviation="2" />
    </filter>
  );

  const StreetFilter = () => (
    <filter id="street">
      <feColorMatrix
        type="matrix"
        values="1.2 0.1 0.1 0 0
                0.2 1   0.2 0 0
                0   0.3 1.3 0 0
                0   0   0   1 0"
      />
      <feComponentTransfer>
        <feFuncR type="table" tableValues="0 0.2 0.6 1" />
        <feFuncG type="table" tableValues="0 0.2 0.6 1" />
        <feFuncB type="table" tableValues="0 0.2 0.6 1" />
      </feComponentTransfer>
    </filter>
  );

  const BeautyFilter = () => (
    <filter id="beauty">
      <feColorMatrix
        type="matrix"
        values="1.2 0.1 0.1 0 0
                0.1 1.2 0.1 0 0
                0.1 0.1 1.2 0 0
                0   0   0   1 0"
      />
      <feComponentTransfer>
        <feFuncR type="gamma" exponent="0.8" />
        <feFuncG type="gamma" exponent="0.8" />
        <feFuncB type="gamma" exponent="0.8" />
      </feComponentTransfer>
    </filter>
  );

  const RedOverlay=()=>(
  <filter id="red_overlay">
    <feColorMatrix
      type="matrix"
      values=" 2.000  0.000  0.000  0.000  0.000 
               0.000  0.000  0.000  0.000  0.000 
               0.000  0.000  0.000  0.000  0.000 
               0.000  0.000  0.000  1.000  0.000">
    </feColorMatrix>
  </filter>
  )

  const GreenOverlay=()=>(
  <filter id="green_overlay">
    <feColorMatrix
      type="matrix"
      values="0.000  0.000  0.000  0.000  0.000 
               0.000  1.000  0.000  0.000  0.000 
               0.000  0.000  0.000  0.000  0.000 
               0.000  0.000  0.000  1.000  0.000">
    </feColorMatrix>
  </filter>
  )

  const BlueOverlay=()=>(
  <filter id="blue_overlay">
    <feColorMatrix
      type="matrix"
      values=" 0.000  0.000  0.000  0.000  0.000 
               0.000  0.000  0.000  0.000  0.000 
               0.000  0.000  1.000  0.000  0.000 
               0.000  0.000  0.000  1.000  0.000">
    </feColorMatrix>
  </filter>
  )

  const NoFilter = () => (
    <filter id="none">
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0"
      />
    </filter>
  );
  return (
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      {SharpenFilter()}
      {InvertFilter()}
      {GammaFilter()}
      {GrayscaleFilter()}
      {SepiaFilter()}
      {NegativeFilter()}
      {LarkFilter()}
      {BokehFilter()}
      {StreetFilter()}
      {BeautyFilter()}
      {RedOverlay()}
      {GreenOverlay()}
      {BlueOverlay()}
      {NoFilter()}
    </svg>
  );
};
export default SVG_Filters;
