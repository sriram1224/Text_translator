import React, { useState } from "react";
import axios from "axios";
import LanguageDropdown from "./LanguageDropdown";
import TextInput from "./TextInput";
import TranslationResult from "./result";
import { supportedLanguages } from "./apiUtils";
import './translate.css';

const LanguageTranslator = () => {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [textInput, setTextInput] = useState("");
  const [translationResult, setTranslationResult] = useState("");

  const translateTextHandler = async () => {
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const apiKey = "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74";

    const headers = {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
    };

    const data = new URLSearchParams({
      source_language: sourceLanguage,
      target_language: targetLanguage,
      text: textInput
    });

    try {
      const response = await axios.post(url, data, { headers });
      const result = response.data;

      if (result.status === "success") {
        const translatedText = JSON.parse(`"${result.data.translatedText}"`);
        setTranslationResult(translatedText);
      } else {
        setTranslationResult("Translation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setTranslationResult("Error occurred during translation.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Language Translator</h1>

      <LanguageDropdown
        label="Source Language"
        languages={supportedLanguages}
        onChange={setSourceLanguage}
      />
      <LanguageDropdown
        label="Target Language"
        languages={supportedLanguages}
        onChange={setTargetLanguage}
      />

      <TextInput
        label="Text to Translate"
        value={textInput}
        onChange={setTextInput}
      />

      <button className="button" onClick={translateTextHandler}>
        Translate
      </button>

      <div className="result">{translationResult}</div>
    </div>
  );
};

export default LanguageTranslator;