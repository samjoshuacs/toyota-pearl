// Data Types
interface Vehicle {
  id: number;
  model: string;
  variant: string;
  price: string;
  image: string;
  engine: string;
  transmission: string;
  fuel: string;
  badge: string | null;
}

// Props
export interface VehiclesGridProps {
  vehicles: Vehicle[];
  max?: number; 
}

// Style Shortcuts
export const fuelColors: Record<string, string> = {
  Hybrid: 'bg-green-100 text-green-700',
  Diesel: 'bg-blue-100 text-blue-700',
  Gasoline: 'bg-gray-100 text-gray-700',
};