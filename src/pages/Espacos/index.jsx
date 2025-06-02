import CardList from "@/Components/CardList";
import Header from "@/Components/Header";

export default function Espacos() {
  const hasScript = document.querySelector("#respondi_src");
  if (!hasScript) {
    const script = document.createElement("script");
    script.setAttribute("async", "");
    document.body.appendChild(script),
      (script.id = "respondi_src"),
      (script.src = "https://embed.respondi.app/embed.js");
  }
  return (
    <>
      <Header />
      <main className="px-10">
        <h1 className="text-green_1 text-center">Destaques</h1>

        <section className="flex max-xl:justify-center py-20">
          <CardList />
        </section>
        <section>
          <h2 className="text-center">Deixe tudo com os Chakreiros!</h2>
          <p className="text-center">
            Com apenas algumas informações sobre seu evento nós encontramos a
            chácara perfeita pra você! É só preencher o formulário abaixo!
          </p>
          <br />
          <p className="text-center">
            Se o formulário não aparecer{" "}
            <a
              className="text-green_3"
              target="blank"
              href="https://form.respondi.app/kjlDOnfe"
            >
              clique aqui
            </a>
          </p>
          <div
            data-respondi-container=""
            data-respondi-mode="regular"
            data-respondi-src="https://form.respondi.app/kjlDOnfe"
            data-respondi-width="100%"
            data-respondi-height="50vh"
          ></div>
        </section>
      </main>
    </>
  );
}
