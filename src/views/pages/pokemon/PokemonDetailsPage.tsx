import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-daisyui";
import { usePokemonDetails } from "../../../hooks";
import { PokemonInfoCard } from "../../components";
import { ROUTES } from "../../../global";
import { HorizontalCardSkeleton } from "../../common";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemon, isFetching } = usePokemonDetails({ id: Number(id!) });

  const goBack = () => {
    navigate(`${ROUTES.POKEMON}`, { replace: true })
  }

  return (
    <div className="w-full p-5 md:w-8/12 mx-auto">
      {isFetching && (<HorizontalCardSkeleton />)}
      {pokemon && (<PokemonInfoCard pokemon={pokemon} />)}
      <Button color="accent" onClick={goBack}>
        Regresar
      </Button>
    </div>
  );
};

export default PokemonDetailsPage;