export const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp));
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
