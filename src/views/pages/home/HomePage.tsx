import { Button, Card } from "react-daisyui";
import { PokeList } from "../../common";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../global";

const items = [
  'Front-End: React 18 + Vite + TypeScript + TailwindCSS & DaisyUI + TanStack React Query',
  'Back-End: Node + NestJS/Express + TypeORM',
  'Database: PostgreSQL',
  'Presiona el botón de "Iniciar Aquí" para ir a la página de Pokemon desde el número #0001 hasta el #1025.'
];

const features = [
  'Listado de Pokemon ✅',
  'Paginación del Listado ✅',
  'Detalles del Pokeemon ✅',
  'Filtrado de Pokemon por tipos ✖️ (No implementado en UI)',
  'Ordenamient de Pokemon por estadisticas ✖️ (No implementado en UI)',
];

const HomePage = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(ROUTES.POKEMON);
  }

  return (
    <Card side="lg">
      <Card.Body>
        <Card.Title tag="h1" className="text-3xl" color="primary">Demo: Prueba Técnica - FirmaVirtualMéxico </Card.Title>
        <p className="text-lg font-semibold">Prueba Técnica para FirmaVirtual Mexico - <Link color="primary" href="https://github.com/codeslator" target="_blank">@codeslator</Link> (Andres Melendez)</p>
        <PokeList items={items} color="accent" />

        <PokeList title="Funcionalidades:" items={features} color="primary" />

        <Card.Actions className="justify-end">
          <Button color="primary" onClick={goTo}>Iniciar Aquí</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default HomePage;