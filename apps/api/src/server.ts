import express from "express";
import { CreateCandidateSchema } from "@candidate-ms/shared";

const app = express();
app.use(express.json());

app.post("/candidates", (req, res) => {
  const result = CreateCandidateSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error);
  }

  res.json({ message: "Valid", data: result.data });
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});
