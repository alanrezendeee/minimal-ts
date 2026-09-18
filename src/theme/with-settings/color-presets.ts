import type { PaletteColorNoChannels } from '../core';

import { primary, secondary } from '../core/palette';

// ----------------------------------------------------------------------

export type ThemeColorPreset =
  | 'default'
  | 'preset1'
  | 'preset2'
  | 'preset3'
  | 'preset4'
  | 'preset5'
  | 'preset6';

export const primaryColorPresets: Record<ThemeColorPreset, PaletteColorNoChannels> = {
  default: {
    lighter: primary.lighter,
    light: primary.light,
    main: primary.main,
    dark: primary.dark,
    darker: primary.darker,
    contrastText: primary.contrastText,
  },
  preset1: {
    lighter: '#CCF4FE',
    light: '#68CDF9',
    main: '#078DEE',
    dark: '#0351AB',
    darker: '#012972',
    contrastText: '#FFFFFF',
  },
  preset2: {
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#FFFFFF',
  },
  preset3: {
    lighter: '#CDE9FD',
    light: '#6BB1F8',
    main: '#0C68E9',
    dark: '#063BA7',
    darker: '#021D6F',
    contrastText: '#FFFFFF',
  },
  preset4: {
    lighter: '#FEF4D4',
    light: '#FED680',
    main: '#fda92d',
    dark: '#B66816',
    darker: '#793908',
    contrastText: '#1C252E',
  },
  preset5: {
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#FF3030',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#FFFFFF',
  },
  // Verde (rgb 0, 113, 71) — mesma matiz em toda a escala.
  preset6: {
    lighter: '#CBF6E6',
    light: '#4EBC93',
    main: '#007147',
    dark: '#004D30',
    darker: '#002E1D',
    contrastText: '#FFFFFF',
  },
};

export const secondaryColorPresets: Record<ThemeColorPreset, PaletteColorNoChannels> = {
  default: {
    lighter: secondary.lighter,
    light: secondary.light,
    main: secondary.main,
    dark: secondary.dark,
    darker: secondary.darker,
    contrastText: secondary.contrastText,
  },
  preset1: {
    lighter: '#CAFDEB',
    light: '#61F4D9',
    main: '#00DCDA',
    dark: '#00849E',
    darker: '#004569',
    contrastText: '#FFFFFF',
  },
  preset2: {
    lighter: '#D6E5FD',
    light: '#85A9F3',
    main: '#3562D7',
    dark: '#1A369A',
    darker: '#0A1967',
    contrastText: '#FFFFFF',
  },
  preset3: {
    lighter: '#FFF3D8',
    light: '#FFD18B',
    main: '#FFA03F',
    dark: '#B75D1F',
    darker: '#7A2D0C',
    contrastText: '#1C252E',
  },
  preset4: {
    lighter: '#FEEFD5',
    light: '#FBC182',
    main: '#F37F31',
    dark: '#AE4318',
    darker: '#741B09',
    contrastText: '#FFFFFF',
  },
  preset5: {
    lighter: '#FCF0DA',
    light: '#EEC18D',
    main: '#C87941',
    dark: '#904220',
    darker: '#601B0C',
    contrastText: '#FFFFFF',
  },
  // Âmbar para acompanhar o verde do preset6.
  preset6: {
    lighter: '#FFF5CC',
    light: '#FFD666',
    main: '#FFAB00',
    dark: '#B76E00',
    darker: '#7A4100',
    contrastText: '#1C252E',
  },
};
