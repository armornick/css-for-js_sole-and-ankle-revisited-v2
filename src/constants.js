export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndBelow: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndBelow: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
