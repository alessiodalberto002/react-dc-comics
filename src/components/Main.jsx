import BlueBelt from "./BlueBelt";
import FilmList from "./filmlist/FilmList";

export default function Main() {

    return (

        <main>
            <div className="bg-dark text-light fs-1 py-2">
                <div className="container">
                    <FilmList />
                </div>
            </div>

            <BlueBelt />
        </main>

    )

}