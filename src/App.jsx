/*
Milestone 1
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.

Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

BONUS
Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
Implementare la funzionalità di modifica del titolo di un post.

*/
import { ListArticles } from "./data/ListArticles";
import { useState } from "react";

function App() {
  return (
    <>
      <main>
        <div className="container p-5">
          <ul className="list-group">
            {ListArticles.map((article) => {
              return (
                <li key={article.id} className="list-group-item">
                  {article.title}
                </li>
              );
            })}
          </ul>
          <form>
            <input className=" form-control my-2" type="text" />
            <button type="submit" className="btn btn-primary">
              Salva
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
