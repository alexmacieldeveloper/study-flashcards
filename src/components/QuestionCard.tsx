import React from "react";
import { Paper, Typography, Divider } from "@mui/material";

type Question = {
  questionPT: string;
  questionEN: string;
  answerPT: string;
  answerEN: string;
};

type Props = {
  question: Question;
  showAnswer: boolean;
};

export default function QuestionCard({ question, showAnswer }: Props) {
  return (
    <Paper elevation={3} sx={{ p: 3, bgcolor: "#fafafa" }}>
      <Typography variant="h6" gutterBottom>
        Pergunta (PT):
      </Typography>
      <Typography paragraph>{question.questionPT}</Typography>

      <Typography variant="h6" gutterBottom>
        Question (EN):
      </Typography>
      <Typography paragraph>{question.questionEN}</Typography>

      {showAnswer && (
        <>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom color="primary">
            Resposta (PT):
          </Typography>
          <Typography paragraph>{question.answerPT}</Typography>

          <Typography variant="h6" gutterBottom color="primary">
            Answer (EN):
          </Typography>
          <Typography paragraph>{question.answerEN}</Typography>
        </>
      )}
    </Paper>
  );
}