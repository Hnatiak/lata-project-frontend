const size = {
  mini: '320',
  mobile: '375',
  mobileLarge: '420',
  tablet: '768',
  desktop: '1440',
};

export const media = {
  mini: `screen and (min-width: ${size.mini})px`,
  mobile: `screen and (min-width: ${size.mobile}px)`,
  mobileLarge: `screen and (min-width: ${size.mobileLarge}px)`,
  tablet: `screen and (min-width: ${size.tablet}px)`,
  desktop: `screen and (min-width: ${size.desktop}px)`,
  mini_Max: `screen and (max-width: ${size.mobile - 1}px)`,
  mob_Max: `screen and (max-width: ${size.tablet - 1}px)`,
  mob_to_tab: `screen and (min-width: ${size.mobile}) and ${size.tablet - 1}px`,
  tab_to_desk: `screen and (min-width: ${size.tablet}) and ${size.desktop - 1}px)`,
  retina: `and (-webkit-min-device-pixel-ratio: 2) `,
};
