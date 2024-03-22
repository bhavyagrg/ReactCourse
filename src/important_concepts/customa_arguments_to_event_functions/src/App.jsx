import {useState} from "react";
import { createRoot } from "react-dom/client";
import TabButton from "./TabButton";
import "./index.css";
import {EXAMPLES} from './data';

const App = () => {
  // hook must be a top element of a function component
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <main>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleClick("components");
              }}
            >
              Component
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {/* content */}
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>
        </section>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
