//Line chart data
export const generateDataPoints = (numPoints) => {
  const labels = [];
  const data = [];
  for (let i = 1; i <= numPoints; i++) {
    labels.push(`product ${i}`);
    data.push(Math.floor(Math.random() * 100) + 1);
  }
  return { labels, data };
};
