import Form from "@/Components/Form";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function Register() {
  return (
    <>
      <div className="h-screen flex flex-col p-20 bg-green_5 max-sm:p-0 max-sm:bg-none">
        <h2 className="text-center text-green_1">Junte-se à nós</h2>
        <Link
          to="/"
          className="w-fit flex gap-2 text-green_2 m-[0_0_1.5rem_1.5rem]"
        >
          {<MoveLeft />}Voltar
        </Link>
        <main className="h-full w-full flex p-1 shadow-custom rounded-3xl border border-white max-sm:p-10 max-sm:border-none max-sm:shadow-none">
          <Form />
        </main>
      </div>
    </>
  );
}
