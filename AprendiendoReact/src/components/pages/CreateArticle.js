import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import Global from "../../Global";
import Sidebar from "../Sidebar";
import swal from "sweetalert";

const titleRef = React.createRef();
const contentRef = React.createRef();
const url = Global.url;
let selectedFile = null;

const CreateArticle = () => {
  const [article, setArticle] = useState({});
  const [status, setStatus] = useState({});
  const validator = new SimpleReactValidator({
    messages: {
      required: "campo requerido",
      alpha_num_space: "Sólo letras, números y espacios",
    },
  });

  const saveArticle = (event) => {
    event.preventDefault();
    if (validator.allValid()) {
      axios.post(url + "save", article).then((res) => {
        const tempArticle = res.data.article;

        if (tempArticle) {
          setStatus("waiting");
          setArticle(tempArticle);
          swal(
            "Artículo creado",
            "El artículo se ha creado correctamente",
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
    }
  };

  const uploadFile = (tempArticle) => {
    const { _id } = tempArticle;
    const formData = new FormData();

    //necesario para añadire el fichero
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
    setArticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
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
        <h1 className={"subheader"}>Creart Articulo</h1>

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
              onChange={updateState}
            />
            {validator.message(
              "title",
              article.title,
              "required|alpha_num_space"
            )}
          </div>

          <div className={"form-group"}>
            <label htmlFor={"content"}>Contenido</label>
            <textarea
              name={"content"}
              ref={contentRef}
              onChange={updateState}
            />
            {validator.message("content", article.content, "required")}
          </div>

          <div className={"form-group"}>
            <label htmlFor={"file0"}>Image</label>
            <input type={"file"} name={"file0"} onChange={fileChange} />
          </div>

          <input
            type={"submit"}
            value={"Guardar"}
            className={"btn btn-success"}
          />
        </form>
      </section>
      <Sidebar />
    </div>
  );
};

export default CreateArticle;
