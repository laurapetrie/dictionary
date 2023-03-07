import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const apiKey = "e7cba0f4344b9ae720f19t5d48co46c3";

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="dictionary">
      <h1 className="main-heading">Dictionary</h1>
      <form onSubmit={search}>
        <input
          type="search"
          className="search-form"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}