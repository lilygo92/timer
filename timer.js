const args = process.argv.slice(2);

const timer = (arr) => {
  let time = 0;
  for (const num of arr) {
    if (num <= 0) {
      continue;
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000 + time);
    time += num * 1000;
  }
};

timer(args);