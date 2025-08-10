import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import questionsData from "./data/questions.json";
import QuestionCard from "./components/QuestionCard";
import CategorySelector from "./components/CategorySelector";
import FlashcardButtons from "./components/FlashcardButtons";

type Category = "technical" | "behavioral";

export default function App() {
  const [category, setCategory] = useState<Category>("technical");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filteredQuestions = questionsData.filter((q) => q.category === category);
  const currentQuestion = filteredQuestions[currentIndex];

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory as Category);
    setCurrentIndex(0);
    setFlipped(false);
  }

  function goNext() {
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
    setFlipped(false);
  }

  function goPrev() {
    setCurrentIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
    setFlipped(false);
  }

  function toggleFlip() {
    setFlipped((prev) => !prev);
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 6, fontFamily: "Roboto, sans-serif" }}>
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold">
        Flashcard de Entrevista
      </Typography>

      <CategorySelector category={category} onChange={handleCategoryChange} />

      {filteredQuestions.length > 0 ? (
        <>
          <Typography variant="subtitle1" gutterBottom textAlign="center">
            Pergunta {currentIndex + 1} de {filteredQuestions.length}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              mb: 3,
              perspective: 1200,
            }}
          >
            <QuestionCard question={currentQuestion} flipped={flipped} onFlip={toggleFlip} />
          </Box>

          <FlashcardButtons
            flipped={flipped}
            onToggleAnswer={toggleFlip}
            onPrev={goPrev}
            onNext={goNext}
            disabled={filteredQuestions.length <= 1}
          />
        </>
      ) : (
        <Typography textAlign="center">Nenhuma pergunta disponível nesta categoria.</Typography>
      )}
    </Container>
  );
}
