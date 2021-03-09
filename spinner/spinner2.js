let cursor = ["|  ", "/  ","-  ", "\\  ","|  ", "/  ","-  ", "\\  "];
let delay = 100;
const spinner = function() {
  for (const spin of cursor) {
    setTimeout(() => {
      process.stdout.write('\r' + spin);
    }, delay);
    delay += 200;
  }
};
spinner();
