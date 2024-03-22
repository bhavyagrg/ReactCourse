import React from "react";
import { createRoot } from "react-dom/client";
import TabButton from "./TabButton";
import "./index.css";

const App = () => {
  let tabContent = "Please click a button..";

  function handleClick(selectedBtn) {
    console.log(selectedBtn);
  }

  return (
    <div>
      <main>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleClick("Component");
              }}
            >
              Component
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("JSX");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("Props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleClick("State");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
