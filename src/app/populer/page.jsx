"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimePopularResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimePopularResponse("top/anime", `page=${page}`);
    setAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={anime} />
      <Pagination
        page={page}
        lastPage={anime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
