"use client";
import Image from "next/image";
import { useState } from "react";

const index = ({ onSearch }) => {

  return (
    <div className="bg-red-200 w-full h-[3.75rem] px-10 flex items-center gap-2">
      <Image src="/img/icon-topbar-busca.svg" width={15} height={15} />
      <form onSubmit={handleSubmit}>
        <input
          className="text-blue200 text-[0.75rem] font-medium"
          placeholder="Busque um agente"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default index;
