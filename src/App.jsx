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
  const [newArticle, setNewArticle] = useState({
    title: "",
  });

  const [articleList, setNewArticleList] = useState(ListArticles);

  function handleSubmit(e) {
    e.preventDefault();

    setNewArticleList([newArticle, ...articleList]);
  }

  function removeArticle(i) {
    const updateArticle = articleList.filter((article, index) => {
      return i !== index;
    });
    setNewArticleList(updateArticle);
  }
  function mofyArticle(i) {
    const mdify = articleList.find((article, index) => {
      return index === i;
    });

    setNewArticleList(
      articleList.map((article, index) =>
        index === i ? { ...article, title: newArticle.title } : article
      )
    );
    console.log(articleList);
  }

  return (
    <>
      <main>
        <div className="container p-5">
          <ul className="list-group">
            {articleList.map((article, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center "
                >
                  <span>{article.title} </span>
                  <div>
                    {" "}
                    <button
                      className="btn btn-warning mx-1"
                      onClick={() => {
                        removeArticle(index);
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        mofyArticle(index);
                      }}
                    >
                      Modifica
                    </button>{" "}
                  </div>
                </li>
              );
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label> Inserisci il nome del nuovo articolo</label>
              <input
                className=" form-control my-2"
                type="text"
                value={newArticle.title}
                onChange={(e) => {
                  setNewArticle({ title: e.target.value });
                }}
              />
            </div>
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
