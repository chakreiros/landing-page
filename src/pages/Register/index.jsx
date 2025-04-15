import Form from "@/Components/Form";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function Register() {
  return (
    <div className="h-screen flex flex-col bg-green_5 p-20">
      <h2 className="m-auto text-green_1 font-bold">Junte-se à nós</h2>
      <Link to="/" className="flex text-green_2 font-bold gap-4">
        {<MoveLeft />}Voltar
      </Link>
      <Form />
    </div>
  );
}
