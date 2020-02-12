export const formatPrice = price => {
  const priceParts = `${price}`.split(".");

  if (priceParts.length === 1) {
    return `${priceParts[0]},00 €`;
  }
  const pricePart2 = `${priceParts[1]}0`.substr(0, 2);

  return `${priceParts[0]},${pricePart2} €`;
};
