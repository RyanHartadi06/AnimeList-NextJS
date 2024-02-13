import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimePopularResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimePopularResponse(
    "anime",
    `q=${decodedKeyword}`
  );

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}..`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
