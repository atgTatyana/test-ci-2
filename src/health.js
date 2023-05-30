export default function sortInHealth(arr) {
  arr.sort((left, right) => right.health - left.health);
  return arr;
}
