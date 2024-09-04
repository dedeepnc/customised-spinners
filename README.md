Spinner Components
Spinner Components is a React component that renders a range of spinners with customisable properties using styled-components for styling and animations.

Installation:
npm i <package name>
yarn add <package name>
npm i styled-components

Usage
Import CircularSpinner from “customerised-spinner/src/CircularSpinner”
Spinner Component Overview
The CircularSpinner component displays a spinner animation with customizable properties. It uses SVG for rendering the spinner graphic and applies rotation animation based on the given props.

Props

1. color (optional): The color of the spinner path. This is applied to both path elements within the SVG. If not provided, the spinner will default to a soft pink color (#D97292).

2. opacity (optional): The opacity of the spinner path, with a default value of 0.5. This controls how transparent the spinner appears.

3. speed (optional): The duration of the spinner animation. This is provided in seconds (e.g., "2s" for a 2-second animation). If not specified, it defaults to "2s".

4. direction (optional): The direction and degree of rotation for the spinner animation. This should be a string representing an angle (e.g., "360deg" for a full rotation). The default direction is "-360deg" for a counterclockwise rotation.

Example

Here’s an example of using the CircularSpinner component with custom properties:
import CircularSpinner from "./components/CircularSpinner";
import "./App.css";
function App() {
return (

   <div>
     <CircularSpinner color="" opacity="0.5" speed="2s" direction="360deg" />
   </div>
 );
}
export default App;

DotSpinner Component Overview
The DotSpinner component creates a spinner with three bouncing dots arranged horizontally. Each dot animates with a bouncing effect, and you can customize the colors of the dots via props.
Usage

import React from 'react';
import DotSpinner from './DotSpinner';
function App() {
return (

  <div>
      <DotSpinner colors={['#FF5733', '#33FF57', '#3357FF']} />
  </div>
);
}
export default App;

Props
colors: An array of strings, where each string represents a color. The array should have exactly three colors. If not provided or incomplete, default colors will be used.

Detailed Description
colors (optional): An array of color values that define the fill color of each dot. The array should have at least three colors. If fewer than three colors are provided, the dots will use default colors (#22333B, #EAE0D5, #C6AC8F).

Example
Here is an example of the DotSpinner component with custom colors:

import React from 'react';
import DotSpinner from './DotSpinner';

function App() {
return (

<div>
<DotSpinner colors={['#FF5733', '#33FF57', '#3357FF']} />
</div>
);
}

export default App;

In this example, the spinner will use the colors #FF5733, #33FF57, and #3357FF for the three dots.
