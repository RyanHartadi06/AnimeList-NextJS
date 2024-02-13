import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimePopularResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimePopularResponse("top/anime", "limit=8");
  return (
    <>
      <section>
        <Header title="Top Anime" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
