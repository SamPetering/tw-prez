import styled from 'styled-components';
import Codeblock from './Example/Codeblocks';
import { Card as CardStyles } from './Example/StyledComponents';
const Card = styled.div`
  background-color: white;
  ${CardStyles}
`;
function WrapperHell() {
  return (
    <div>
      <h4 className="mb-8 text-center text-2xl font-semibold">Wrapper Hell</h4>
      <Card>
        <div>
          <div>title</div>
        </div>
      </Card>
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
