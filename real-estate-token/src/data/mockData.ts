// src/data/mockData.ts

export interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  pricePerToken: number; // In USDC
  totalTokens: number;
  tokensSold: number;
  apy: number; // Annual Percentage Yield (Return on Investment)
  minInvestment: number;
  status: "Available" | "Sold Out" | "Coming Soon";
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Lekki Apartment",
    location: "Lekki Phase 1, Lagos",
    image: "https://images.unsplash.com/photo-1600596542815-e32870110029?auto=format&fit=crop&w=800&q=80",
    pricePerToken: 50,
    totalTokens: 1000,
    tokensSold: 750,
    apy: 12.5,
    minInvestment: 50,
    status: "Available",
  },
  {
    id: "2",
    title: "Abuja Central Office",
    location: "Central Business District, Abuja",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    pricePerToken: 100,
    totalTokens: 5000,
    tokensSold: 1200,
    apy: 9.8,
    minInvestment: 100,
    status: "Available",
  },
  {
    id: "3",
    title: "Student Housing UNILORIN",
    location: "Ilorin, Kwara State",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    pricePerToken: 25,
    totalTokens: 2000,
    tokensSold: 2000,
    apy: 15.2,
    minInvestment: 25,
    status: "Sold Out",
  },
  {
    id: "4",
    title: "Banana Island Villa",
    location: "Banana Island, Lagos",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    pricePerToken: 500,
    totalTokens: 10000,
    tokensSold: 0,
    apy: 8.5,
    minInvestment: 500,
    status: "Coming Soon",
  },
];