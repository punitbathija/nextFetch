import Link from "next/link";
import React from "react";

async function fetchUsers() {
  const userRes = await fetch(
    "https://652bccced0d1df5273eeb9f2.mockapi.io/ap/v1/users",
    {
      next: {
        revalidate: 20,
        // This will check if the data on the api/db has been changed if yes than rebuild after 200 seconds
      },
    }
  );
  console.log(`On my Server ${userRes}`);
  return userRes.json();
}

const ISR = async () => {
  const state = await fetchUsers();

  return (
    <div className="flex flex-col text-lg font-bold p-4 leading-9">
      <div className="flex justify-between">
        <h1 className="text-5xl underline">ISR</h1>
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

export default ISR;
