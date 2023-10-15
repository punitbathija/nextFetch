import Link from "next/link";
import React from "react";

async function fetchUsers() {
  const userRes = await fetch(
    "https://652bccced0d1df5273eeb9f2.mockapi.io/ap/v1/users",
    {
      cache: "force-cache",
    }
  );
  console.log(`On my Server ${userRes}`);
  return userRes.json();
}

const SSG = async () => {
  const state = await fetchUsers();

  return (
    <div className="flex flex-col text-lg font-bold p-4 leading-9">
      <div className="flex justify-between">
        <h1 className="text-5xl underline">SSG</h1>
        <Link href="/">
          <h1 className="text-2xl mt-4">🏠</h1>
        </Link>
      </div>
      {state.map((item: any) => {
        return (
          <div className="my-4" key={item.id}>
            <h2 className="underline">
              Id: {item.id}
              <br />
              Name: {item.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default SSG;
