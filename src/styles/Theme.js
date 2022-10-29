import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  // Palette from FlatUI - https://flatuicolors.com/palette/defo
  colors: {
    // Default Colors
    white: '#ffffff',

    primary: '#0e1b6b',
    secondary: '#4763e4',
    warning: '#dc2626',

    text: '#000',
    placeholder: '#9fa6b2',
    borderInput: '#e5e5e5',
    activeInput: '#5c73dB',

    // Falta colocar cores
    danger: '#f37272',
    light: '#ecf0f1',
    dark: '#233240',
    background: '#f37272',

    // Other Colors
    black: '#000000',
    turquese: '#1abc9c',
    turqueseDark: '#16a085',
    green: '#2ecc71',
    greenDark: '#27ae60',
    blue: '#3498db',
    blueDark: '#2980b9',
    violet: '#9b59b6',
    violetDark: '#8e44ad',
    yellow: '#f1c40f',
    yellowDark: '#f39c12',
    orange: '#e67e22',
    orangeDark: '#d35400',
    red: '#e74c3c',
    redDark: '#c0392b',
    champagne: '#ecf0f1',
    champagneDark: '#bdc3c7',
    metal: '#95a5a6',
    metalDark: '#7f8c8d',
    asphalt: '#34495e',
    asphaltDark: '#2c3e50',
    carbon: '#555459',
    carbonDark: '#3b3a3e',
  },
  fonts: ['Inter', 'sans-serif'].join(','),

  fontSizes: {
    small: '.875rem', // 14px
    normal: '1rem', // 16px
    normalLarge: '1.125rem', // 18px
    semiLarge: '1.25rem', // 20px
    large: '1.75rem', // 28px
    title: '2rem', // 32px
  },

  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
