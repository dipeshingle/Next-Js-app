import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { baseUrl } from "../constants/movie";
import { Movie } from "../utils/typings.t";
import { FaPlay } from "react-icons/fa";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(netflixOriginals[Math.random() * netflixOriginals.length]);
  }, []);
  console.log(movie, "movie");

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="-z-10 absolute top-0 left-0 h-[95vh] w-screen ">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div>
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black " />
        </button>
        <button className="bannerButton bg-[gray]/70 ">
          More Info{" "}
          <HiOutlineInformationCircle className="text-lg md:text-3xl " />
        </button>
      </div>
    </div>
  );
};

export default Banner;