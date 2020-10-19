import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Moment from "react-moment";
import "moment/locale/es";

const Articles = (props) => {
  const url = Global.url;
  const [articles, setArticles] = useState({});
  const isInHome = props.home;
  const isArticleSearched = props.search;
  const searched = props.search;

  useEffect(() => {
    if (isInHome) {
      getLastArticles();
    } else if (isArticleSearched) {
      getArticlesBySearch(searched);
    } else {
      getArticles();
    }
  }, []);

  const getArticles = () => {
    axios.get(url + "/articles").then((res) => {
      setArticles(res.data.articles);
    });
  };

  const getLastArticles = () => {
    axios.get(url + "/articles/last").then((res) => {
      setArticles(res.data.articles);
    });
  };

  const getArticlesBySearch = (searched) => {
    axios
      .get(url + "/search/" + searched)
      .then((res) => {
        if (res.data.articles) {
          setArticles(res.data.articles);
        }
      })
      .catch((err) => {
        setArticles([]);
      });
  };

  return (
    <div id="articles">
      {articles.length >= 1 ? (
        articles.map((article) => {
          return (
            <article
              key={article._id}
              className="article-item"
              id="article-template"
            >
              <div className="image-wrap">
                {article.image != null ? (
                  <img
                    src={url + "get-image/" + article.image}
                    alt={article.title}
                  />
                ) : (
                  <img src={Global.imageDefault} alt={"default"} />
                )}
              </div>

              <h2>{article.title}</h2>
              <span className="date">
                <Moment locale="es" fromNow>
                  {article.date}
                </Moment>
              </span>
              <Link to={"/blog/articulo/" + article._id}>Leer más</Link>

              <div className="clearfix" />
            </article>
          );
        })
      ) : articles.status === "success" && articles.length < 1 ? (
        <h2>Lista de artículos vacía</h2>
      ) : (
        articles.status !== "success" && <h2>Resultados no encontrados</h2>
      )}
    </div>
  );
};

export default Articles;
