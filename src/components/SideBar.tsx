import { Button } from './Button';

interface Props {
  selectedGenreId: number
  handleClickButton: (id:number) => void; //typing a function with params
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
    }[] // This interface means that "genres", is an array of objects with id, name, and title properties.
}

export function SideBar (props: Props) {

  const genres = props.genres; 
  
  return (
     <nav className="sidebar">
            <span>Watch<p>Me</p></span>
          
          <div className="buttons-container">
            {genres.map(genre => (
              <Button
                key={String(genre.id)}
                title={genre.title}
               iconName={genre.name}
                onClick={() => props.handleClickButton(genre.id)}
                selected={props.selectedGenreId === genre.id}
              />
            ))}
          </div>
      </nav>
  )
}