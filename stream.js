export const createInputStream = (input) => {
  let pos = 0;
  let line = 0;
  let col = 0;

  const next = () => {
    let char = input[pos];
    pos++;

    if (char === '\n') line++;
    else col++;

    return char;
  };

  const peek = () => input[pos];

  const eof = () => pos >= input.length;

  const croak = (msg) => {
    throw new Error(`${msg} (${line}:${col})`);
  };

  return { next, peek, eof, croak };
};
