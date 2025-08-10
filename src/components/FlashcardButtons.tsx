import React from "react";
import { Box, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
  flipped: boolean;
  onToggleAnswer: () => void;
  onPrev: () => void;
  onNext: () => void;
  disabled: boolean;
};

export default function FlashcardButtons({
  flipped,
  onToggleAnswer,
  onPrev,
  onNext,
  disabled,
}: Props) {
  return (
    <Box sx={{ mt: '5rem', display: "grid", gridTemplateRows: "1fr", gap: 2 }}>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={onToggleAnswer}
          startIcon={flipped ? <VisibilityOffIcon /> : <VisibilityIcon />}
        >
          {flipped ? "Esconder Resposta" : "Mostrar Resposta"}
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
    </Box>
  );
}
