import { memo } from "react";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

type SideBarProps = {
  genres: GenreResponseProps[];
  handleClickButton(id: number): void;
  selectedGenreId: number;
};

export const SideBar = memo(
  ({ genres, handleClickButton, selectedGenreId }: SideBarProps) => {
    return (
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    );
  }
);
