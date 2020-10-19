import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import Global from "../../Global";
import Sidebar from "../Sidebar";
import swal from "sweetalert";

const EditArticle = (props) => {
  // const [id, setId] = useState(null);
  const idProp = props.match.params.id;
  const id = idProp?.toString() ?? null;
  const [article, setArticle] = useState({});
  const [status, setStatus] = useState({});
  const url = Global.url;
  const titleRef = React.createRef();
  const contentRef = React.createRef();

  let urlToEdit = `${url}article/${id}`;
  let selectedFile = null;

  const validator = new SimpleReactValidator({
    messages: {
      required: "campo requerido",
      alpha_num_space: "Sólo letras, números y espacios",
    },
  });

  // const forceUpdate = useForceUpdate();

  useEffect(() => {
    getArticle(props);
  }, [id]);

  const getArticle = () => {
    axios.get(urlToEdit).then((res) => {
      if (res.data.status === "success") {
        setArticle(res.data.article);
        setStatus("loaded");
      }
    });
  };

  const saveArticle = (event) => {
    event.preventDefault();
    if (validator.allValid()) {
      axios.put(urlToEdit, article).then((res) => {
        const tempArticle = res.data.article;

        // buscar hook isMount
        if (tempArticle) {
          setStatus("waiting");
          setArticle(tempArticle);
          swal(
            "Artículo editado",
            "El artículo se ha editado correctamente",
            "success"
          );
          if (selectedFile !== null) {
            uploadFile(tempArticle);
          } else {
            setStatus("success");
          }
        } else {
          setStatus({
            status: "failed",
          });
        }
      });
    } else {
      swal("Faltand datos", "Rellene los campos requeridos", "warning");
    }
  };

  const uploadFile = (tempArticle) => {
    const { _id } = tempArticle;
    const formData = new FormData();

    formData.append("file0", selectedFile, selectedFile.name);

    axios.post(url + "/upload-image/" + _id, formData).then((res) => {
      const tempArticleWithPhoto = res.data.article;

      if (tempArticleWithPhoto) {
        setStatus("success");
      } else {
        setStatus("failed");
      }
      setArticle(tempArticleWithPhoto);
    });
  };

  const updateState = () => {
    let articleTemp = {
      ...article,
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    setArticle({ ...articleTemp });
  };

  const fileChange = (event) => {
    selectedFile = event.target.files[0];
  };

  if (status === "success") {
    return <Redirect to={"/blog"} />;
  }

  return (
    <div className={"center"}>
      <section id={"content"}>
        <h1 className={"subheader"}>Editar Articulo</h1>
        {status === "loaded" ? (
          <form
            className={"mid-form"}
            onSubmit={saveArticle}
            onBlur={validator.showMessages()}
          >
            <div className={"form-group"}>
              <label htmlFor={"title"}>Titulo</label>
              <input
                type={"text"}
                name={"title"}
                ref={titleRef}
                defaultValue={article.title}
                onChange={updateState}
              />
              {validator.message("title", article.title, "required")}
            </div>

            <div className={"form-group"}>
              <label htmlFor={"content"}>Contenido</label>
              <textarea
                name={"content"}
                ref={contentRef}
                defaultValue={article.content}
                onChange={updateState}
              />
              {validator.message("content", article.content, "required")}
            </div>

            <div className={"form-group"}>
              <label htmlFor={"file0"}>Image</label>
              <div className={"image-wrap"}>
                {article.image != null && (
                  <img
                    src={url + "get-image/" + article.image}
                    alt={article.title}
                    className={"thumb"}
                  />
                )}
              </div>
              <input type={"file"} name={"file0"} onChange={fileChange} />
            </div>

            <input
              type={"submit"}
              value={"Guardar"}
              className={"btn btn-success"}
            />
          </form>
        ) : (
          <h1 className="subheader">Cargando</h1>
        )}
      </section>
      <Sidebar />
    </div>
  );
};

export default EditArticle;
