"use client";

import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setRespone] = useState();
  const login = async () => {
    const res = await fetch("https://cangorkemgunes.com/api/register", {
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      method: "POST",
    });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center gap-8">
      <form className="flex flex-col gap-8" action={login}>
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
