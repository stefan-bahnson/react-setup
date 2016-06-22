export function showGrowl(bool) {
  console.log(bool);
  return {
    type: 'SET_GROWL',
    show: bool
  }
}
