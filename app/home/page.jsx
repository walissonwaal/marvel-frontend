"use client";
import { useState, useEffect } from "react";
import { SideNav, TopBar } from "@/components";
import navItems from "@/components/SideNav/navItems.json";
import { getCharacters, searchCharacters } from "../utils/api";
import CharacterCard from "@/components/CharacterCard";
import Image from "next/image";

import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const charactersPerPage = 10;

  const handleSearch = async () => {
    if (query.trim() !== "") {
      setIsLoading(true);
      try {
        const searchData = await searchCharacters(query);
        setResults(searchData.results);
        setIsSearch(true);
        setCurrentPage(1);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    } else {
      setResults([]);
      setIsSearch(false);
    }
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersData = await getCharacters();
        setCharacters(charactersData.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const currentCharacterList = isSearch
    ? results
    : characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    (isSearch ? results.length : characters.length) / charactersPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderCharacterList = () => {
    if (isLoading) {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#213770"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName="absolute left-0 right-0"
                visible={true}
              />
        </div>
      );
    }

    if (currentCharacterList.length === 0) {
      return (
        <div className="absolute text-center mt-10">
          <p className="text-lg font-semibold text-gray-500">
            Nenhum personagem encontrado.
          </p>
        </div>
      );
    }

    return currentCharacterList.map((character, index) =>
      index < 8 ? (
        <CharacterCard key={character.id} character={character} />
      ) : (
        <div className="md:col-span-2" key={character.id}>
          <CharacterCard character={character} />
        </div>
      )
    );
  };

  return (
    <div className="flex">
      <SideNav navItems={navItems} />
      <div className="w-full">
        <div className="bg-white w-full h-[3.75rem] px-10 flex items-center gap-2">
          <Image src="/img/icon-topbar-busca.svg" width={15} height={15} />
          <input
            className="p-4 font-bold text-lg text-blue600 bg-transparent rounded-xl outline-none"
            placeholder="Busque um agente"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 px-6 2xl:p-6">
          {renderCharacterList()}
        </div>

        {/* Pagination */}
        <div className={`${currentCharacterList.length === 0 ? 'hidden' : null} flex items-center justify-center mt-4`}>
          <button
            className='pagination-before'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Image src='/img/icon-arrow-left.svg' alt='icon-arrow-left' width={20} height={20} />
            Anterior
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-item ${
                currentPage === index + 1 ? "font-bold text-blue800" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className='pagination-after'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próxima
            <Image src='/img/icon-arrow-right.svg' alt='icon-arrow-left' width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
