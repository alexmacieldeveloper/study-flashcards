import React from "react";
import { Box, Paper, Typography } from "@mui/material";

type Question = {
  questionPT: string;
  questionEN: string;
  answerPT: string;
  answerEN: string;
};

type Props = {
  question: Question;
  flipped: boolean;
  onFlip: () => void;
};

export default function QuestionCard({ question, flipped, onFlip }: Props) {
  return (
    <Box
      onClick={onFlip}
      sx={{
        width: "100%",
        maxWidth: 400,
        minHeight: 650,
        cursor: "pointer",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s ease-in-out",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        userSelect: "none",
        borderRadius: 3,
        boxShadow: 8,
        mx: "auto", 
        mb: 4, 
        backgroundColor: "transparent",
      }}
      aria-label="Flashcard"
    >
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "#fafafa",
          backfaceVisibility: "hidden",
          borderRadius: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflowY: "auto", 
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Pergunta (PT):
        </Typography>
        <Typography paragraph sx={{ whiteSpace: "pre-wrap" }}>
          {question.questionPT}
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 3 }}>
          Question (EN):
        </Typography>
        <Typography paragraph sx={{ whiteSpace: "pre-wrap" }}>
          {question.questionEN}
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "primary.main",
          color: "primary.contrastText",
          backfaceVisibility: "hidden",
          borderRadius: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflowY: "auto",
          boxSizing: "border-box",
          transform: "rotateY(180deg)",
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 14 } }>
          Resposta (PT):
        </Typography>
        <Typography paragraph sx={{ whiteSpace: "pre-wrap" }}>
          {question.answerPT}
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 3 }}>
          Answer (EN):
        </Typography>
        <Typography paragraph sx={{ whiteSpace: "pre-wrap" }}>
          {question.answerEN}
        </Typography>
      </Paper>
    </Box>
  );
}
