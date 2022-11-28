import React from "react";
import { useState } from "react";
import axios from "axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title,
      body,
    });
  };
  return (
    <div>
      <div className=" mb-3">
        <h1>Create a blog post</h1>
        <label htmlFor="" className="form-lable">
          Tilte
        </label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className=" mb-3">
        <label htmlFor="" className="form-lable">
          Body
        </label>
        <textarea
          className="form-control "
          rows="20"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

export default CreatePage;
