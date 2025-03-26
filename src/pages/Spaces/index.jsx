import CardList from "@/Components/CardList";
import Header from "@/Components/Header";

export default function Spaces() {
  return (
    <>
      <Header />
      <main className="p-40">
        <h1>Chácaras</h1>

        <section className="py-20">
          <CardList />
        </section>
      </main>
    </>
  );
}
