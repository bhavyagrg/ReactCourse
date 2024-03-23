import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";

export default function Examples() {
  // hook must be a top element of a function component
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components" ? true : false}
          onSelect={() => {
            handleClick("components");
          }}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx" ? true : false}
          onSelect={() => {
            handleClick("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props" ? true : false}
          onSelect={() => {
            handleClick("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state" ? true : false}
          onSelect={() => {
            handleClick("state");
          }}
        >
          State
        </TabButton>
      </menu>
      {/* content */}
      {/* One way to render content conditionally */}
      {!selectedTopic ? (
        <p>Please select a button..</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
