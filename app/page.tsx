import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <h1 className="text-5xl text-center underline leading-loose">
        NEXT JS FETCHING METHODS
      </h1>
      <div className="flex flex-wrap align-middle justify-center gap-4 my-4 m-auto">
        <Link href="/csr">
          <Button variant="ghost" color="danger">
            CSR(Client Side Rendering)
          </Button>
        </Link>
        <Link href="/ssr">
          <Button variant="ghost" color="warning">
            SSR(Server Side Rendering)
          </Button>
        </Link>
        <Link href="/ssg">
          <Button variant="ghost" color="secondary">
            SSG(Static Side Generation)
          </Button>
        </Link>
        <Link href="/isr">
          <Button variant="ghost" color="success">
            ISR(Incremental Server Regeneration)
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
