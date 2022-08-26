import Image from "next/image";
import { Movie } from "../utils/typings.t";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  console.log(movie, "movie");
  return (
    <div className="relative h-28 min-w-[1801px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm md:rounded object-cover"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
