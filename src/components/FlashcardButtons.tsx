import React from "react";
import { Box, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
  showAnswer: boolean;
  onToggleAnswer: () => void;
  onPrev: () => void;
  onNext: () => void;
  disabled: boolean;
};

export default function FlashcardButtons({
  showAnswer,
  onToggleAnswer,
  onPrev,
  onNext,
  disabled,
}: Props) {
  return (
    <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
      <Button
        variant="contained"
        onClick={onToggleAnswer}
        startIcon={showAnswer ? <VisibilityOffIcon /> : <VisibilityIcon />}
      >
        {showAnswer ? "Esconder Resposta" : "Mostrar Resposta"}
      </Button>
      <Button
        variant="outlined"
        onClick={onPrev}
        disabled={disabled}
        startIcon={<ArrowBackIcon />}
      >
        Anterior
      </Button>
      <Button
        variant="outlined"
        onClick={onNext}
        disabled={disabled}
        endIcon={<ArrowForwardIcon />}
      >
        Próxima
      </Button>
    </Box>
  );
}