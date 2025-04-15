import CardList from "@/Components/CardList";
import Header from "@/Components/Header";

export default function Spaces() {
  return (
    <>
      <Header />
      <main className="p-40">
        <h1 className="text-green_1">Chácaras</h1>

        <section className="flex max-xl:justify-center py-20">
          <CardList />
        </section>
      </main>
    </>
  );
}
