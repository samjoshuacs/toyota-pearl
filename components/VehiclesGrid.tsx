// Libraries
import { Fuel, Settings, Zap } from "lucide-react";
import Image from "next/image";

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
interface VehiclesGridProps {
  vehicles: Vehicle[];
  max?: number; 
}
const fuelColors: Record<string, string> = {
  Hybrid: 'bg-green-100 text-green-700',
  Diesel: 'bg-blue-100 text-blue-700',
  Gasoline: 'bg-gray-100 text-gray-700',
};

// Component Body
const VehiclesGrid = ({vehicles, max = 3}: VehiclesGridProps) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {vehicles.map((car, index) => (

        <div
            key={car.id}
            className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group ${
            index >= max ? 'hidden md:flex' : 'flex'
            }`}
        >

            {/* Image */}
            <div className="relative overflow-hidden h-52">

                <Image
                    src={car.image}
                    alt={car.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={400}
                    height={600}
                />

                {car.badge && (
                    <span className="absolute top-3 left-3 bg-[#EB0A1E] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {car.badge}
                    </span>
                )}

            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">

                <div className="flex items-start justify-between mb-1">
                    <div>
                        <h3 className="text-[#1a1a1a] font-bold text-lg">{car.model}</h3>
                        <p className="text-gray-400 text-xs">{car.variant}</p>
                    </div>

                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${fuelColors[car.fuel]}`}>
                        {car.fuel}
                    </span>
                </div>

                <p className="text-[#EB0A1E] font-bold text-xl mt-2 mb-4">
                    {car.price}
                    <span className="text-gray-400 text-xs font-normal ml-1">starting price</span>
                </p>

                <div className="flex gap-4 mb-5 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <Zap size={13} className="text-gray-400" />
                        <span>{car.engine}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Settings size={13} className="text-gray-400" />
                        <span>{car.transmission}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Fuel size={13} className="text-gray-400" />
                        <span>{car.fuel}</span>
                    </div>
                </div>

                <a
                    href="#contact"
                    className="mt-auto block text-center bg-[#1a1a1a] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#EB0A1E] transition-colors duration-200"
                >
                    View Details
                </a>
            </div>
        </div>
        ))}
    </div>
  )
}

export default VehiclesGrid