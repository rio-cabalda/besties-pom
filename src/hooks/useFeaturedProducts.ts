import { ProductItemType } from "../types";

const useFeaturedProducts = (allProducts:ProductItemType[], count: number) => {
    // Create a copy of the original array to avoid modifying it
  const newProducts = [...allProducts];

  // Create an array to store the randomly selected objects
  const randomProducts = [];

  // Check if the requested count is greater than the array length
  if (count >= newProducts.length) {
    return newProducts; // Return the entire array if count is greater or equal to the array length
  }

  // Randomly select and remove objects from the copyArr until count is reached
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * newProducts.length);
    randomProducts.push(newProducts.splice(randomIndex, 1)[0]);
  }

  return randomProducts;
}

export default useFeaturedProducts;