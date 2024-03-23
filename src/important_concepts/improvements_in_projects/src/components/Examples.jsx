import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  // hook must be a top element of a function component
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  let tabContent = <p>Please select a button..</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components" ? true : false}
              onClick={() => {
                handleClick("components");
              }}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx" ? true : false}
              onClick={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props" ? true : false}
              onClick={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state" ? true : false}
              onClick={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        {/* content */}
        {/* One way to render content conditionally */}
        {/* {!selectedTopic ? (
          <p>Please select a button..</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}

        {tabContent}
      </Tabs>
    </Section>
  );
}
