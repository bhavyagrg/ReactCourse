import { createRoot } from "react-dom/client";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

const App = () => {
  return (
    <>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
