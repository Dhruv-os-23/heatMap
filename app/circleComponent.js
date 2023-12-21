// CircleComponent.js
import React from 'react';
import { Circle } from '@react-google-maps/api';

const CircleComponent = ({ center, radius, options }) => {
  return <Circle center={center} radius={radius} options={options} />;
};

export default CircleComponent;
