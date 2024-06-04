import { Button, Card } from "react-daisyui";
import { PokeList } from "../../common";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../global";

const items = [
  'Front-End: React 18 + Vite + TypeScript + TailwindCSS & DaisyUI',
  'Back-End: Node + NestJS/Express + TypeORM',
  'Database: PostgreSQL',
]

const HomePage = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(ROUTES.POKEMON);
  }

  return (
    <Card side="lg">
      <Card.Body>
        <Card.Title tag="h1" color="primary">FirmaVirtual Technical Test Demo</Card.Title>
        <p>Technical Test for FirmaVirtual Mexico - <Link color="primary" href="https://github.com/codeslator" target="_blank">@codeslator</Link> (Andres Melendez)</p>
        <PokeList items={items} color="accent" />

        <Card.Actions className="justify-end">
          <Button color="primary" onClick={goTo}>Start Here</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default HomePage;