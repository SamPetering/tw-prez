import styled from 'styled-components';
import Codeblock from './Example/Codeblocks';
const HButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
const VButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
function WrapperHell() {
  return (
    <div>
      <h4 className="mb-8 text-center text-2xl font-semibold">Wrapper Hell</h4>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="">
          <VButtonWrapper>
            <HButtonWrapper>
              <button
                className="w-full bg-blue-600 px-[20px] py-[10px] text-white hover:bg-blue-800"
                onClick={() => alert('fizz!')}
                type="button"
              >
                Fizz
              </button>
              <button
                className="w-full bg-blue-600 px-[20px] py-[10px] text-white hover:bg-blue-800"
                onClick={() => alert('buzz!')}
                type="button"
              >
                Buzz
              </button>
            </HButtonWrapper>
            <button
              className=" w-full bg-blue-600 px-[20px] py-[10px] text-white hover:bg-blue-800"
              onClick={() => alert('Hello,')}
              type="button"
            >
              Hello,
            </button>
            <button
              className=" w-full bg-blue-600 px-[20px] py-[10px] text-white hover:bg-blue-800"
              onClick={() => alert('World!')}
              type="button"
            >
              World!
            </button>
          </VButtonWrapper>
          <br />
          {/* Wrapper SCs */}
          <Codeblock
            blocks={[
              {
                lang: 'tsx',
                code: `const MyButton = styled.div\`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  &:hover {
  background-color: dark-blue;
}\`
const HButtonWrapper = styled.div\`
  display: flex;
  gap: 1rem;
  width: 100%;
\`;
const VButtonWrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
\`;

<body>
  <VButtonWrapper>
    <HButtonWrapper>
        <MyButton onClick={() => alert('fizz!')}> 
            Fizz
        </MyButton>
        <MyButton onClick={() => alert('buzz!')}>
            Buzz
        </MyButton>
    </HButtonWrapper>
        <MyButton onClick={() => alert('Hello,')}> 
            Hello,
        </MyButton>
        <MyButton onClick={() => alert('World!')}>
            World!
        </MyButton>
  </VButtonWrapper>
</body>`,
              },
            ]}
          />
          <br />
          <h5 className="mb-8 text-center text-xl font-semibold">
            Abstraction 1
          </h5>
          {/* Utility SCs */}
          <Codeblock
            blocks={[
              {
                lang: 'tsx',
                code: `const Flex = styled.div<{direction: 'row' | 'column'; gap: string}>\`
  display: flex;
  flex-direction: \${props => props.direction};
  gap: \${props => props.gap};
  width: 100%;
\`;

return(<body>
  <Flex direction="column" gap="1rem">
    <Flex direction="row" gap="1rem">
        <MyButton onClick={() => alert('fizz!')}> 
            Fizz
        </MyButton>
        <MyButton onClick={() => alert('buzz!')}>
            Buzz
        </MyButton>
    </Flex>
        <MyButton onClick={() => alert('Hello,')}> 
            Hello,
        </MyButton>
        <MyButton onClick={() => alert('World!')}>
            World!
        </MyButton>
  </Flex>
</body>);`,
              },
            ]}
          />
          <br />
          {/* Utility Constants */}
          <Codeblock
            blocks={[
              {
                lang: 'tsx',
                code: `const flexRow = css\`display: flex; flex-direction: row;\`
const flexCol = css\`display: flex; flex-direction: column;\`
const gap1 = css\`1rem;\`
const border = css\`border: 1px solid black;\`
const widthFull = css\`width: 100%;\`;

return (<body>
  <div classNames={cx(flexCol, gap1, border, widthFull)}>
    <div classNames={cx(flexRow, gap1, widthFull)}>
        <MyButton onClick={() => alert('fizz!')}> 
            Fizz
        </MyButton>
        <MyButton onClick={() => alert('buzz!')}>
            Buzz
        </MyButton>
    </div>
        <MyButton onClick={() => alert('Hello,')}> 
            Hello,
        </MyButton>
        <MyButton onClick={() => alert('World!')}>
            World!
        </MyButton>
  </div>
</body>);`,
              },
            ]}
          />
          <br />
          {/* Tailwind */}
          <Codeblock
            blocks={[
              {
                lang: 'tsx',
                code: `return (<body>
  <div classNames="flex flex-col gap-4 w-full border border-black">
    <div classNames="flex gap-4 w-full>
        <MyButton onClick={() => alert('fizz!')}> 
            Fizz
        </MyButton>
        <MyButton onClick={() => alert('buzz!')}>
            Buzz
        </MyButton>
    </div>
        <MyButton onClick={() => alert('Hello,')}> 
            Hello,
        </MyButton>
        <MyButton onClick={() => alert('World!')}>
            World!
        </MyButton>
  </div>
</body>);`,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default function UCPitch() {
  return (
    <div className="flex flex-col gap-32 pt-12">
      <div>
        {/* TRAD */}
        <h4 className="mb-8 text-center text-2xl font-semibold">
          Traditional web page
        </h4>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4">
            <div className="flex h-full flex-col gap-4">
              <Codeblock
                title="css"
                blocks={[
                  {
                    lang: 'css',
                    code: `#myButton {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

#myButton:hover {
  background-color: darkblue;
}`,
                  },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Codeblock
                title="html"
                blocks={[
                  {
                    lang: 'html',
                    code: `<body>
  <button id="myButton">Click Me</button>
  <script src="script.js"></script>
</body>`,
                  },
                ]}
              />
              <Codeblock
                title="js"
                blocks={[
                  {
                    lang: 'javascript',
                    code: `document
  .getElementById("myButton")
  .addEventListener("click", () => {
    alert("fizz");
});`,
                  },
                ]}
              />
            </div>
          </div>
          <div className="w-fit">
            <button
              className="col-span-2 bg-blue-600 px-[20px] py-[10px] text-white hover:bg-blue-800"
              onClick={() => alert('fizz!')}
              type="button"
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
      {/* MODERN */}
      <div>
        <h4 className="mb-8 text-center text-2xl font-semibold">
          A more modern approach
        </h4>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="">
            <Codeblock
              title="jsx"
              blocks={[
                {
                  lang: 'tsx',
                  code: `const MyButton = styled.div\`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
  background-color: dark-blue;
}\`

<body>
  <MyButton onClick={() => alert("buzz!")}>
    Click Me
  </MyButton>
</body>`,
                },
              ]}
            />
          </div>
          <button
            className="col-span-2 bg-blue-600 px-[20px] py-[10px] text-white hover:bg-blue-800"
            onClick={() => alert('buzz!')}
            type="button"
          >
            Click Me
          </button>
        </div>
      </div>
      {/* WRAPPER HELL */}
      <WrapperHell />
    </div>
  );
}
