"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CSR = () => {
  const [state, setState] = useState([]);

  async function getData() {
    const res: any = await fetch(
      "https://652bccced0d1df5273eeb9f2.mockapi.io/ap/v1/users"
    );
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  });

  return (
    <div className="flex flex-col text-lg font-bold p-4 leading-9">
      <div className="flex justify-between">
        <h1 className="text-5xl underline">CSR</h1>
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

export default CSR;
