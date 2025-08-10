import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import questionsData from "./data/questions.json";
import QuestionCard from "./components/QuestionCard";
import CategorySelector from "./components/CategorySelector";
import FlashcardButtons from "./components/FlashcardButtons";

type Category = "technical" | "behavioral";

export default function App() {
  const [category, setCategory] = useState<Category>("technical");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const filteredQuestions = questionsData.filter((q) => q.category === category);
  const currentQuestion = filteredQuestions[currentIndex];

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory as Category);
    setCurrentIndex(0);
    setShowAnswer(false);
  }

  function goNext() {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  }

  function goPrev() {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, fontFamily: "Roboto, sans-serif" }}>
      <Typography variant="h4" gutterBottom>
        Flashcard de Entrevista
      </Typography>

      <CategorySelector category={category} onChange={handleCategoryChange} />

      {filteredQuestions.length > 0 ? (
        <>
          <Typography variant="subtitle1" gutterBottom>
            Pergunta {currentIndex + 1} de {filteredQuestions.length}
          </Typography>

          <QuestionCard question={currentQuestion} showAnswer={showAnswer} />

          <FlashcardButtons
            showAnswer={showAnswer}
            onToggleAnswer={() => setShowAnswer((prev) => !prev)}
            onPrev={goPrev}
            onNext={goNext}
            disabled={filteredQuestions.length <= 1}
          />
        </>
      ) : (
        <Typography>Nenhuma pergunta disponível nesta categoria.</Typography>
      )}
    </Container>
  );
}