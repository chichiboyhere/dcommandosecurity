const carBrands = [
  { brand: "Toyota Corolla", price: "₦10,000/hr" },
  { brand: "Honda Civic", price: "₦12,000/hr" },

  { brand: "Lexus RX", price: "₦22,000/hr" },
  { brand: "Mercedes Benz", price: "₦25,000/hr" },
  { brand: "Tesla Model S", price: "₦30,000/hr" },
  { brand: "Lamborghini Huracan", price: "₦60,000/hr" },
  { brand: "Porsche 911", price: "₦70,000/hr" },
  { brand: "Ferrari 488", price: "₦80,000/hr" },
  { brand: "Rollsroyce Phantom", price: "₦100,000/hr" },
  { brand: "Bugatti Chiron", price: "₦200,000/hr" },

  { brand: "Others - specify below" },
];

const CarRentalFields = () => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Service Type
        </label>
        <div className="flex flex-col md:flex-row gap-4 mt-1 text-black z-60 font-semibold">
          {["Car Rental", "Airport Pick-Up", "Both"].map((type) => (
            <label key={type} className="flex items-center gap-1">
              <input
                type="radio"
                name="serviceType"
                value={type}
                required
                className="accent-blue-700 font-semibold "
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Car Brand
        </label>
        <select
          name="carBrand"
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">-- Select --</option>
          {carBrands.map(({ brand, price }) => (
            <option key={brand} value={`${brand} - ${price}`}>
              {brand} ({price})
            </option>
          ))}
        </select>
      </div>
      <h2 className="font-semibold mt-4">
        Select Duration(If within same day specify, in hours, inside text area
        below)
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            name="startDate"
            type="date"
            required
            className="w-full border px-3 py-2 rounded text-blue-900"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            name="endDate"
            type="date"
            required
            className="w-full border px-3 py-2 rounded text-blue-900"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
    </>
  );
};

export default CarRentalFields;
