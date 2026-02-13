import { CreateCandidateDto } from "@candidate-ms/shared/candidate";

function App() {
  const example: CreateCandidateDto = {
    firstName: "John",
    lastName: "Doe",
    email: "john@test.com",
    experience: 3,
    statusId: 1,
  };

  return <div>{example.firstName}</div>;
}

export default App;
