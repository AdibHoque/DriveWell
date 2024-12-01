export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Services",
    route: "/services",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export type Product = {
  name: string;
  price: number;
  image: string;
  id: string;
};
