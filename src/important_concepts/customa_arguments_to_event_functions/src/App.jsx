import { useState } from "react";
import { createRoot } from "react-dom/client";
import TabButton from "./TabButton";
import "./index.css";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./CoreConcept";

const App = () => {
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
    <div>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title}
              // title={conceptItem.title}
              // description={conceptItem.description}
              // image={conceptItem.image}
              {...conceptItem}
            />)}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>

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
          {/* {!selectedTopic ? <p>Please select a button..</p> : <div id="tab-content">

<h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
  <code>{EXAMPLES[selectedTopic].code}</code>
</pre>
</div>} */}

          {/* Another way */}
          {/* {!selectedTopic && <p>Please select a button..</p> }
{selectedTopic && <div id="tab-content">

<h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
  <code>{EXAMPLES[selectedTopic].code}</code>
</pre>
</div>} */}

          {/* Last way */}
          {tabContent}
        </section>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
