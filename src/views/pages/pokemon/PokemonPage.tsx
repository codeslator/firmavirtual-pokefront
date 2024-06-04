import { PokemonList } from "../../components";

const PokemonPage = () => {
  return (
    <div className="mx-auto">
      <p className="text-xl md:text-3xl text-gray-900 dark:text-white text-center my-2">
        Pokemon List
      </p>
      <PokemonList />
    </div>
  );
};

export default PokemonPage;