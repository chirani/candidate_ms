import { z } from "zod";

export const CreateCandidateSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  experience: z.number().min(0),
  statusId: z.number(),
});

export type CreateCandidateDto = z.infer<typeof CreateCandidateSchema>;

export interface Candidate {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  experience: number;
  statusId: number;
  createdAt: string;
  updatedAt: string;
}
