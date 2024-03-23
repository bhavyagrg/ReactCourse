import { createRoot } from "react-dom/client";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

const App = () => {
  return (
    <div>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
