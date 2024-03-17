{
  "presets"[
    ["@babel/present-env",{target:{node:"current"}}],
    ["@babel/preset-react", {
      runtime: "automatic"
   }]
  ],
  {
    "plugins": [
      ["@babel/plugin-transform-react-jsx", {
        "runtime": "automatic"
      }]
      ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ]
  }
}