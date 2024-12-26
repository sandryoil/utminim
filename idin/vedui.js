function timeSequence(unit, start, stop, step) {
  let timeSequence = [];
  let current = start;
  while (current <= stop) {
    timeSequence.push(current);
    current += step;
  }
  return timeSequence;
}
