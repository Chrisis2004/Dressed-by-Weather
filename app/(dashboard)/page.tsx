import Image from "next/image";
import DataInsertion from "@/components/DataInsertion";
import {TextInput} from "@tremor/react";
import DressingPage from "@/components/DressingPage";

export default function Home() {
  return (
      <main>
          <div className="flex min-h-screen flex-1 flex-col justify-center items-center">
              <DressingPage/>
          </div>
      </main>
  );
}
