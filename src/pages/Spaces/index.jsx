import CardList from "@/Components/CardList";
import Header from "@/Components/Header";

export default function Spaces() {
  return (
    <>
      <Header />
      <main className="p-20">
        <h1>Chácaras</h1>

        <section>
          <CardList />
        </section>
      </main>
    </>
  );
}
