export default function Hero() {
  return (
    <section className="bg-pink-100 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">
          Encontre o espaço perfeito para seu lazer
        </h2>
        <p className="text-gray-700 mb-6">
          Locação de áreas com piscina, churrasqueira e diversão garantida para
          seus finais de semana.
        </p>
        <a
          href="#explore"
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition"
        >
          Explorar espaços
        </a>
      </div>
    </section>
  );
}
