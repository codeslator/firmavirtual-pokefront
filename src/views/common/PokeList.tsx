import { FC } from 'react';

interface PokeListProps {
  title?: string;
  subtitle?: string;
  items: string[];
  color?: string;
}

const PokeList: FC<PokeListProps> = ({ title, subtitle, items, color = 'neutral' }) => {
  return (
    <>
      {(title) && (<p className="text-2xl font-bold">{title}</p>)}
      {(subtitle) && (<p className="text-2xl font-semibold">{subtitle}</p>)}
      <ul className="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
        {items.map((text) => (
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className={`w-5 h-5 me-2 text-${color} dark:text-${color} flex-shrink-0`} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3s3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3s-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
            </svg>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokeList;