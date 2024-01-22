import { Colors, Theme } from '../types';
import { borders, fontSizes, fontWeights, spacings } from './common';

export const darkColors: Colors = {
  black: '#000000',
  white: '#ffffff',
  red: {
    900: '#1f1315',
    800: '#291415',
    700: '#3c181a',
    600: '#481a1d',
    500: '#541b1f',
    400: '#671e22',
    300: '#822025',
    200: '#aa2429',
    100: '#e5484d',
    50: '#f2555a'
  },
  purple: {
    900: '#1b141d',
    800: '#221527',
    700: '#301a3a',
    600: '#3a1e48',
    500: '#432155',
    400: '#4e2667',
    300: '#5f2d84',
    200: '#7938b2',
    100: '#8e4ec6',
    50: '#9d5bd2'
  },
  blue: {
    900: '#0f1720',
    800: '#0f1b2d',
    700: '#10243e',
    600: '#102a4c',
    500: '#0f3058',
    400: '#0d3868',
    300: '#0a4481',
    200: '#0954a5',
    100: '#0091ff',
    50: '#369eff'
  },
  green: {
    900: '#0d1912',
    800: '#0f1e13',
    700: '#132819',
    600: '#16301d',
    500: '#193921',
    400: '#1d4427',
    300: '#245530',
    200: '#2f6e3b',
    100: '#46a758',
    50: '#55b467'
  },
  yellow: {
    900: '#1c1500',
    800: '#221a00',
    700: '#2c2100',
    600: '#352800',
    500: '#3e3000',
    400: '#493c00',
    300: '#594a05',
    200: '#705e00',
    100: '#f5d90a',
    50: '#ffef5c'
  },
  orange: {
    900: '#1f1206',
    800: '#2b1400',
    700: '#391a03',
    600: '#441f04',
    500: '#4f2305',
    400: '#5f2a06',
    300: '#763205',
    200: '#943e00',
    100: '#f76808',
    50: '#ff802b'
  },
  gray: {
    900: '#161616',
    800: '#1c1c1c',
    700: '#232323',
    600: '#282828',
    500: '#2e2e2e',
    400: '#343434',
    300: '#3e3e3e',
    200: '#505050',
    100: '#707070',
    50: '#7e7e7e'
  },
  slate: {
    900: '#151718',
    800: '#1a1d1e',
    700: '#202425',
    600: '#26292b',
    500: '#2b2f31',
    400: '#313538',
    300: '#3a3f42',
    200: '#4c5155',
    100: '#697177',
    50: '#787f85'
  },
  overlay: {
    100: 'rgba(0, 0, 0, 0.01)',
    200: 'rgba(0, 0, 0, 0.02)',
    300: 'rgba(0, 0, 0, 0.03)',
    400: 'rgba(0, 0, 0, 0.04)',
    500: 'rgba(0, 0, 0, 0.05)',
    600: 'rgba(0, 0, 0, 0.06)',
    700: 'rgba(0, 0, 0, 0.07)',
    800: 'rgba(0, 0, 0, 0.08)',
    900: 'rgba(0, 0, 0, 0.09)'
  },
  pink: {
    100: '#281e21',
    200: '#ff4d87'
  }
};

/**
 * Dark theme example.
 */
export const darkTheme: Theme = {
  colors: darkColors,
  typography: {
    families: {
      fontFamily: 'Inter, sans-serif',
      monoFontFamily: 'Monaco, monospace'
    },
    sizes: fontSizes,
    weights: fontWeights
  },
  spacings,
  borders,
  gradients: {
    blue: {
      '100': 'linear-gradient(204deg, #19D4EE 10%, #4B5CFA 100%)',
      '200': 'linear-gradient(30deg, #2E27AD 0%, #679BFF 100%)'
    },
    orange: {
      '100': 'linear-gradient(45deg, #C8511B 0%, #FFA800 100%)'
    },
    red: {
      '100': 'linear-gradient(204deg, #FF8A8A 10%, #C14941 100%)'
    },
    green: {
      '100': 'linear-gradient(45deg, #055F4E 0%, #56C0A7 100%)'
    },
    pink: {
      '100': 'linear-gradient(204deg, #FC7AFF 10%, #C15179 100%)'
    }
  },
  shadows: {
    100: '0 2px 4px 0 rgba(17,22,26,0.16), 0 0 4px 0 rgba(17,22,26,0.08), 0 4px 8px 0 rgba(17,22,26,0.04)',
    200: '0 4px 8px 0 rgba(17,22,26,0.16), 0 4px 8px 0 rgba(17,22,26,0.08), 0 8px 16px 0 rgba(17,22,26,0.04)',
    300: '0 0 8px 0 rgba(17,22,26,0.06), 0 4px 16px 0 rgba(17,22,26,0.08), 0 8px 12px 0 rgba(17,22,26,0.06), 0 16px 24px 0 rgba(17,22,26,0.04)',
    400: '0 4px 12px 0 rgba(17,22,26,0.06), 0 4px 24px 8px rgba(17,22,26,0.12), 0 8px 16px 0 rgba(17,22,26,0.06), 0 32px 40px 0 rgba(17,22,26,0.02)',
    500: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    600: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    700: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    800: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    900: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)'
  },
  palettes: {
    body: {
      background: darkColors.gray['900'],
      color: darkColors.white
    },
    primary: {
      background: darkColors.blue['400'],
      color: darkColors.blue['300'],
      'background-hover': darkColors.blue['200'],
      'color-hover': darkColors.white
    },
    secondary: {
      background: darkColors.blue['500'],
      color: darkColors.blue['300'],
      'background-hover': darkColors.blue['400'],
      'color-hover': darkColors.blue['200']
    },
    error: {
      background: darkColors.red['100'],
      color: darkColors.red['100'],
      'background-hover': darkColors.red['50'],
      'color-hover': darkColors.red['50']
    },
    success: {
      background: darkColors.green['100'],
      color: darkColors.green['100'],
      'background-hover': darkColors.green['50'],
      'color-hover': darkColors.green['50']
    },
    warning: {
      background: darkColors.orange['100'],
      color: darkColors.orange['100'],
      'background-hover': darkColors.orange['50'],
      'color-hover': darkColors.orange['50']
    },
    info: {
      background: darkColors.blue['100'],
      color: darkColors.blue['100'],
      'background-hover': darkColors.blue['50'],
      'color-hover': darkColors.blue['50']
    },
    disabled: {
      background: darkColors.gray['500'],
      color: darkColors.gray['200']
    }
  },
  components: {
    block: {
      'block-spacing': spacings.md,
      'block-label-spacing': spacings.xs,
      'block-label-size': fontSizes.sm,
      'block-label-weight': fontWeights.bold
    },
    button: {
      'button-font-weight': '500',
      'button-font-family': 'var(--font-family)',
      'button-background': darkColors.gray['200'],
      'button-background-hover': darkColors.gray['100'],
      'button-color': darkColors.gray['100'],
      'button-color-hover': darkColors.gray['50'],
      'button-color-on-background': darkColors.white,
      'button-disabled-color-on-background': darkColors.gray['100'],
      'button-border-radius': borders.radius.md,
      'button-border': `solid 1px ${darkColors.gray['500']}`,
      'button-focus': darkColors.blue['100'],
      'button-focus-offset': spacings.xs,
      'button-spacing-sm': `${spacings.xs} ${spacings.sm}`,
      'button-spacing-md': `${spacings.sm} ${spacings.md}`,
      'button-spacing-lg': `${spacings.md} ${spacings.lg}`,
      'button-adornment-size-sm': fontSizes.sm,
      'button-adornment-size-md': fontSizes.md,
      'button-adornment-size-lg': fontSizes.lg
    },
    card: {
      'card-border': '0',
      'card-border-radius': borders.radius.md,
      'card-spacing': spacings.md,
      'card-background': darkColors.slate['800'],
      'card-color': darkColors.slate['50']
    },
    checkbox: {
      'checkbox-label-color': darkColors.white,
      'checkbox-check-stroke': darkColors.blue['100'],
      'checkbox-box-checked-stroke': darkColors.slate['100'],
      'checkbox-box-unchecked-stroke': darkColors.slate['100']
    },
    chip: {
      'chip-font-family': 'var(--font-family)',
      'chip-background': darkColors.gray['200'],
      'chip-background-hover': darkColors.gray['100'],
      'chip-color': darkColors.white,
      'chip-color-hover': darkColors.gray['50'],
      'chip-border-radius': borders.radius.md
    },
    dialog: {
      'dialog-background': darkColors.slate['800'],
      'dialog-color': darkColors.white
    },
    divider: {
      'divider-spacing': spacings.md,
      'divider-background': darkColors.gray['500']
    },
    drawer: {
      'drawer-background': darkColors.slate['800'],
      'drawer-color': darkColors.white
    },
    input: {
      'input-background': darkColors.slate['800'],
      'input-color': darkColors.white,
      'input-color-placeholder': darkColors.gray['200'],
      'input-placeholder-style': 'italic',
      'input-border': `solid 1px ${darkColors.gray['200']}`,
      'input-border-radius': borders.radius.md,
      'input-border-focus': darkColors.gray['100'],
      'input-spacing-md': `${spacings.sm} ${spacings.md}`,
      'input-spacing-sm': spacings.sm,
      'input-spacing-lg': spacings.lg,
      'input-adornment-size': fontSizes.md,
      'input-adornment-fill': 'var(--input-color)'
    },
    textarea: {
      'textarea-background': darkColors.slate['800'],
      'textarea-border': `solid 1px ${darkColors.gray['200']}`,
      'textarea-border-radius': borders.radius.md,
      'textarea-border-focus': darkColors.gray['100'],
      'textarea-color': darkColors.white,
      'textarea-color-placeholder': darkColors.gray['200'],
      'textarea-placeholder-style': 'italic',
      'textarea-spacing-md': spacings.md,
      'textarea-spacing-sm': spacings.sm,
      'textarea-spacing-lg': spacings.lg
    },
    list: {
      'list-item-color': 'inherit',
      'list-item-spacing': spacings.md,
      'list-item-dense-spacing': spacings.sm,
      'list-item-border-radius': '0',
      'list-item-color-active': 'inherit',
      'list-item-background-active': 'transparent',
      'list-item-adornment-fill': 'currentColor'
    },
    popover: {
      'popover-background': darkColors.slate['500'],
      'popover-color': darkColors.white,
      'popover-border-radius': borders.radius.md,
      'popover-spacing': spacings.md
    },
    notification: {
      'notification-background': darkColors.slate['700'],
      'notification-color': darkColors.white,
      'notification-border': `solid 1px ${darkColors.gray['500']}`,
      'notification-color-error': darkColors.red['100'],
      'notification-color-warning': darkColors.orange['100'],
      'notification-color-success': darkColors.green['100']
    },
    loader: {
      'loader-background': darkColors.gray['100']
    },
    radio: {
      'radio-label-color': darkColors.white,
      'radio-stroke': darkColors.slate['100'],
      'radio-stroke-active': darkColors.blue['100'],
      'radio-stroke-size': '1px',
      'radio-background': 'transparent',
      'radio-indicator-active': darkColors.blue['100']
    },
    select: {
      'select-input-border-radius': spacings.sm,
      'select-input-background': darkColors.slate['800'],
      'select-input-border': `solid 1px ${darkColors.slate['200']}`,
      'select-input-color': darkColors.white,
      'select-input-spacing': `${spacings.sm} ${spacings.md}`,
      'select-input-error': darkColors.red['100'],
      'select-input-placeholder-color': darkColors.gray['50'],
      'select-input-disabled-color': darkColors.gray['100'],
      'select-input-icon-color': darkColors.gray['50'],

      'select-menu-background': darkColors.slate['800'],
      'select-menu-border': `solid 1px ${darkColors.slate['200']}`,
      'select-menu-border-radius': `0 0 ${borders.radius.md} ${borders.radius.md}`,
      'select-menu-item-color': darkColors.white,
      'select-menu-group-color': darkColors.slate['50'],
      'select-menu-item-spacing': `${spacings.sm} ${spacings.md}`,
      'select-menu-item-active-background': darkColors.slate['500'],
      'select-menu-item-active-color': darkColors.white,
      'select-menu-item-selected-color': darkColors.white,
      'select-menu-item-selected-background': darkColors.blue['200'],

      'select-chip-background': darkColors.slate['300'],
      'select-chip-border': `solid 1px ${darkColors.slate['900']}`,
      'select-chip-border-radius': 'var(--chip-border-radius)',
      'select-chip-color': darkColors.white,
      'select-chip-icon-color': darkColors.slate['50']
    },
    toggle: {
      'toggle-width': '55px',
      'toggle-height': '35px',
      'toggle-handle-size': '25px',
      'toggle-background': darkColors.gray['100'],
      'toggle-background-checked': darkColors.blue['50'],
      'toggle-border': 'none',
      'toggle-border-checked': 'none',
      'toggle-border-radius': borders.radius.lg,
      'toggle-spacing': spacings.sm,
      'toggle-handle-background': darkColors.gray['300'],
      'toggle-handle-checked-background': darkColors.gray['300'],
      'toggle-handle-border-radius': borders.radius.lg,
      'toggle-disabled-background': darkColors.gray['100'],
      'toggle-handle-disabled-background': darkColors.gray['300'],
      'toggle-checked-disabled-background': darkColors.blue['50'],
      'toggle-handle-checked-disabled-background': darkColors.gray['300'],
      'toggle-disabled-opacity': '0.8'
    },
    tooltip: {
      'tooltip-background': darkColors.slate['500'],
      'tooltip-color': darkColors.white,
      'tooltip-border-radius': borders.radius.md,
      'tooltip-spacing': spacings.sm,
      'tooltip-border': 'none'
    },
    range: {
      'range-track-background': darkColors.slate['300'],
      'range-track-border-radius': '0',
      'range-track-size': '2px',
      'range-handle-size': '14px',
      'range-handle-border-radius': '50%',
      'range-track-active-background': 'var(--primary-color)',
      'range-handle-background': 'var(--primary-color)'
    },
    sort: {
      'sort-icon-color': darkColors.white,
      'sort-icon-size': '14px'
    },
    avatar: {
      'avatar-initials-color': darkColors.white,
      'avatar-border': 'solid 1px var(--body-background)'
    },
    stack: {
      'stack-gap': spacings.md,
      'stack-dense-gap': spacings.sm
    },
    avatarGroup: {
      'avatar-group-spacing': `calc(${spacings.md} * -1)`
    },
    typography: {
      'page-title-font-size': '40px',
      'page-title-font-weight': 'var(--font-weight-bold)',
      'page-title-color': darkColors.white,
      'page-title-margin': '0 0 var(--spacing-lg) 0',
      'primary-heading-font-size': 'var(--font-size-xxl)',
      'primary-heading-font-weight': 'var(--font-weight-extraBold)',
      'primary-heading-color': darkColors.white,
      'primary-heading-margin': '0 0 var(--spacing-sm) 0',
      'secondary-heading-font-size': 'var(--font-size-xl)',
      'secondary-heading-font-weight': 'var(--font-weight-normal)',
      'secondary-heading-color': darkColors.white,
      'secondary-heading-margin': '0 0 var(--spacing-sm) 0',
      'small-heading-font-size': 'var(--font-size-md)',
      'small-heading-font-weight': 'var(--font-weight-normal)',
      'small-heading-color': darkColors.white,
      'small-heading-margin': '0 0 var(--spacing-sm) 0',
      'sub-font-size': 'var(--font-size-sm)',
      'sub-font-weight': 'var(--font-weight-bold)',
      'sub-color': darkColors.white,
      'sub-margin': '0 0 var(--spacing-xs) 0'
    },
    calendar: {
      'calendar-spacing': '8px'
    },
    badge: {
      'badge-color-background-default': darkColors.white,
      'badge-color-default': darkColors.black,
      'badge-color-background-primary': 'var(--primary-background)',
      'badge-color-primary': darkColors.white,
      'badge-color-background-secondary': 'var(--secondary-background)',
      'badge-color-secondary': darkColors.white,
      'badge-color-background-error': 'var(--error-background)',
      'badge-color-error': darkColors.white,
      'badge-border-radius': '50%'
    }
  }
};
