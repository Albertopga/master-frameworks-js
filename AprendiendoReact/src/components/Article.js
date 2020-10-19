import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar";
import Moment from "react-moment";
import "moment/locale/es";
import swal from "sweetalert";

const Article = (props) => {
  const url = Global.url;
  const [article, setArticle] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    getArticle(props);
  }, []);

  const getArticle = (props) => {
    const id = props.match.params.id;
    axios.get(url + "article/" + id).then((res) => {
      setStatus(res.data.status);
      setArticle(res.data.article);
    });
  };

  const deleteArticle = (id) => {
    swal({
      title: "Borrar artículo",
      text: "¿Seguro que desea borrar el arículo?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((value) => {
      if (value) {
        axios.delete(url + "article/" + id).then((res) => {
          setStatus("deleted");
        });
        swal(`El artículo ha sido borrado`);
      }
    });
  };

  if (status === "deleted") return <Redirect to={"/blog"} />;

  return (
    <div className="center">
      <section id="content">
        {article ? (
          <article className="article-item article-detail">
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

            <h1 className="subheader">{article.title}</h1>
            <span className="date">
              <Moment fromNow>{article.date}</Moment>{" "}
            </span>
            <p>{article.content}</p>

            <button
              onClick={() => {
                deleteArticle(article._id);
              }}
              className="btn btn-danger"
            >
              Eliminar
            </button>
            <Link
              to={"/blog/editar/" + article._id}
              className="btn btn-warning"
            >
              Editar
            </Link>
            <div className="clearfix"></div>
          </article>
        ) : (
          <h1>Artículo no encontrado</h1>
        )}
      </section>
      <Sidebar />
    </div>
  );
};
export default Article;
