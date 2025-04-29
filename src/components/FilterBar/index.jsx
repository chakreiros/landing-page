const categories = [
  "Chalés",
  "Icônicos",
  "Em frente à praia",
  "Piscinas incríveis",
  "Espaços criativos",
  "Casas de terra",
  "Vistas incríveis",
  "Pousadas",
  "Parques nacionais",
  "No interior",
  "Ilhas",
];

export default function FilterBar() {
  return (
    <div className="w-full border-b overflow-x-auto bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-6 whitespace-nowrap">
        {categories.map((category, index) => (
          <button key={index} className=" text-gray-700 hover:text-black">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
