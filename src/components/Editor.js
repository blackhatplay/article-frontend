import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// import SimpleImage from "@editorjs/simple-image";
import Marker from "@editorjs/marker";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Quote from "@editorjs/quote";
import server, { serverURL } from "../api/server";
import classnames from "classnames";

const Editor = ({ history }) => {
  const [state, setState] = useState({
    title: "",
    creator: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log("errors", errors);

  const onClick = (e) => {
    // editor.current.readOnly.toggle();
    editor.current
      .save()
      .then((outputData) => {
        if (state.title.split("").length === 0) {
          return setErrors({ title: "title required" });
        } else if (state.creator.split("").length === 0) {
          return setErrors({ creator: "creator required" });
        } else if (outputData.blocks.length === 0) {
          return setErrors({ data: "data required" });
        } else {
          setErrors({});
        }

        const newArticle = {
          title: state.title,
          creator: state.creator,
          data: JSON.stringify(outputData),
        };
        server
          .post("/post", newArticle)
          .then((res) => {
            history.push(`/${res.data.urlId}`);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  const editor = useRef();
  useEffect(() => {
    editor.current = new EditorJS({
      holder: "editorjs",
      minHeight: 10,
      placeholder: "Let`s write an awesome story!",
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4],
          },
        },
        marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: `${serverURL}/upload/byFile`, // Your backend file uploader endpoint
              byUrl: `${serverURL}/upload/byUrl`, // Your endpoint that provides uploading by Url
            },
          },
        },

        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        // ...
      },
    });

    server.get("/").then((res) => console.log(res.data));
  }, []);
  return (
    <div className="container">
      <div className="editor-header">
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={state.title}
          placeholder="Title"
          className={classnames("editor-title", {
            "is-invalid": errors.title,
          })}
        />
        <input
          type="text"
          name="creator"
          onChange={onChange}
          value={state.creator}
          placeholder="Your name"
          className={classnames("editor-creator", {
            "is-invalid": errors.creator,
          })}
        />
      </div>
      <div
        id="editorjs"
        className={classnames({
          "invalid-editor": errors.data,
        })}
      ></div>
      <button className="my-button" onClick={onClick}>
        Publish
      </button>
    </div>
  );
};

export default Editor;
