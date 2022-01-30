export const sum = (a: number, b: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unused = 'foo';

  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
