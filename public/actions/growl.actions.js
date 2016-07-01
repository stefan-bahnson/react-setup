export function showGrowl(bool) {
  return {
    type: 'SET_GROWL',
    show: bool,
  };
}
