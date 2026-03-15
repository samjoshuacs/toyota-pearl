// External Components
import VehiclesGrid from "./VehiclesGrid";

// Dummy data
const vehicles = [
  {
    id: 1,
    model: "Toyota Fortuner",
    variant: "2024 | 4x4 AT",
    price: "₱2,298,000",
    image: "https://images.unsplash.com/photo-1772389192167-b427bc7c1e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBTVVYlMjBoZXJvJTIwc2hvdHxlbnwxfHx8fDE3NzMzMDAxMzJ8MA&ixlib=rb-4.1.0&q=80&w=600",
    engine: "2.8L Diesel",
    transmission: "Automatic",
    fuel: "Diesel",
    badge: "Best Seller",
  },
  {
    id: 2,
    model: "Toyota Hilux",
    variant: "2024 | G AT",
    price: "₱1,498,000",
    image: "https://images.unsplash.com/photo-1714213624189-9a9fc8a0736a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBIaWx1eCUyMHBpY2t1cCUyMHRydWNrfGVufDF8fHx8MTc3MzMwMDEzM3ww&ixlib=rb-4.1.0&q=80&w=600",
    engine: "2.4L Diesel",
    transmission: "Automatic",
    fuel: "Diesel",
    badge: "Top Pick",
  },
  {
    id: 3,
    model: "Toyota Corolla",
    variant: "2024 | Altis AT",
    price: "₱1,238,000",
    image: "https://images.unsplash.com/photo-1763268265028-1631360c07dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBDb3JvbGxhJTIwd2hpdGUlMjBzZWRhbnxlbnwxfHx8fDE3NzMzMDAxMzR8MA&ixlib=rb-4.1.0&q=80&w=600",
    engine: "1.6L Gasoline",
    transmission: "Automatic",
    fuel: "Gasoline",
    badge: null,
  },
  {
    id: 4,
    model: "Toyota RAV4",
    variant: "2024 | Premium AT",
    price: "₱1,998,000",
    image: "https://images.unsplash.com/photo-1648197323414-4255ea82d86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBSQVY0JTIwY3Jvc3NvdmVyfGVufDF8fHx8MTc3MzMwMDEzNHww&ixlib=rb-4.1.0&q=80&w=600",
    engine: "2.0L Hybrid",
    transmission: "CVT",
    fuel: "Hybrid",
    badge: "New Arrival",
  },
  {
    id: 5,
    model: "Toyota Innova",
    variant: "2024 | Cross AT",
    price: "₱1,655,000",
    image: "https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBJbm5vdmElMjBNUFYlMjBjYXJ8ZW58MXx8fHwxNzczMzAwMTM4fDA&ixlib=rb-4.1.0&q=80&w=600",
    engine: "2.0L Hybrid",
    transmission: "CVT",
    fuel: "Hybrid",
    badge: null,
  },
  {
    id: 6,
    model: "Toyota Vios",
    variant: "2024 | XLE MT",
    price: "₱818,000",
    image: "https://images.unsplash.com/photo-1749058983469-11eaef8d7bc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBWaW9zJTIwY29tcGFjdCUyMHNlZGFufGVufDF8fHx8MTc3MzMwMDEzOXww&ixlib=rb-4.1.0&q=80&w=600",
    engine: "1.3L Gasoline",
    transmission: "Manual",
    fuel: "Gasoline",
    badge: "Most Affordable",
  },
];

// Component Body
const FeaturedVehicles = () => {
  return (
    <section
      id="vehicles"
      className="py-20 bg-[#f8f8f8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#EB0A1E] text-xs font-semibold tracking-widest uppercase">Our Fleet</span>
          <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Featured Toyota Vehicles
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Explore our selection of brand new Toyota vehicles. Each model is backed by Toyota's legendary reliability and our commitment to exceptional service.
          </p>
        </div>

        {/* Vehicle grid */}
        <VehiclesGrid vehicles={vehicles} max={3} />

      </div>
    </section>
  )
}

export default FeaturedVehicles