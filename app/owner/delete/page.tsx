"use client";

import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setRespone] = useState();
  const user = async () => {
    const res = await fetch("http://localhost:3001/api/members", {
      headers: {
        Authorization:
          "BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbmdvcmtlbWd1bmVzQGdtYWlsLmNvbSIsImlkIjoiZ0JRN0RFbnpUVktKWmZjb3Y4ZnkiLCJpYXQiOjE3MzA4NjM2OTIsImV4cCI6MTczMzQ1NTY5Mn0.xb5oi0yRaZCweo542HieskEo0OgVGpt3FYp_fqn8h2Y",
      },
      method: "DELETE",
      body: JSON.stringify({
        id: "MsdnDgMGIWbllz8VfBow",
      }),
    });
    /*       body: JSON.stringify([
      { name: "can", lastName: "asdf" },
      { name: "cihan", lastName: "senyuz" },
    ]), */

    if (res.ok) {
      console.log(await res.json());
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center gap-8">
      <form className="flex flex-col gap-8" action={user}>
        <input
          type="text"
          value={email}
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit the form!</button>
      </form>
    </div>
  );
};

export default Page;
