// Curated stock photography (Pexels) per project/industry
export const photos = {
  restaurant: "https://images.pexels.com/photos/20184685/pexels-photo-20184685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  restaurantAlt: "https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  realestate: "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  realestateAlt: "https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  education: "https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  healthcare: "https://images.pexels.com/photos/30282653/pexels-photo-30282653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  law: "https://images.pexels.com/photos/8111872/pexels-photo-8111872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  fitness: "https://images.pexels.com/photos/31028213/pexels-photo-31028213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  travel: "https://images.pexels.com/photos/5232385/pexels-photo-5232385.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  ecommerce: "https://images.pexels.com/photos/7760562/pexels-photo-7760562.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  corporate: "https://images.pexels.com/photos/7424584/pexels-photo-7424584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  saas: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
} as const;

export type PhotoKey = keyof typeof photos;
