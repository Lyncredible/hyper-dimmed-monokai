'use strict';
const backgroundColor = '#1E1E1E';
const foregroundColor = '#B8BCB9';
const cursorColor = '#F83D19';
const cursorAccentColor = '#161616';

const colors = [
  '#3A3C43', // black
  '#BE3E48', // red
  '#869A3A', // green
  '#C4A535', // yellow
  '#4E76A1', // blue
  '#855B8D', // magenta
  '#568EA3', // cyan
  '#B8BCB9', // white
  '#888987', // lightBlack
  '#FB001E', // lightRed
  '#0E712E', // lightGreen
  '#C37033', // lightYellow
  '#176CE3', // lightBlue
  '#FB0067', // lightMagenta
  '#2D6F6C', // lightCyan
  '#FCFFB8', // lightWhite
];

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: cursorColor,
    cursorAccentColor: cursorAccentColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
      }
      .tab_active:before {
        border-bottom-color: #E6DB74 !important;
      }
    `
  })
);
