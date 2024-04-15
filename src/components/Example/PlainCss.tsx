import {
  Star,
  Lightbulb,
  Volume2,
  Play,
  Shuffle,
  CircleArrowLeft,
  CircleArrowRight,
  Maximize,
} from 'lucide-react';
import {
  useStuff,
  breadcrumbs,
  title,
  rating,
  reviews,
  modes,
  hint,
  clickMessage,
  cardData,
} from './Index';
import Codeblock from './Codeblocks';

export default function PlainCss() {
  const { current, showDef, flip, term, def, prev, next, isStart, isEnd } =
    useStuff();
  return (
    <div className="QBody">
      {/* breadcrumbs */}
      <div className="Breadcrumb-Wrapper">
        {breadcrumbs.map((b, i) => {
          const final = i === breadcrumbs.length - 1;
          return (
            <div className="Breadcrumb-Link" key={b}>
              <a href="#">{b}</a>
              {!final && <div className="Breadcrumb-Divider">/</div>}
            </div>
          );
        })}
      </div>
      {/* title */}
      <div className="Title-Wrapper">
        <h1 className="Title-Header">{title}</h1>
        <div className="Set-Rating">
          <Star strokeWidth={0} fill="#ffcd1f" />
          <div className="Set-Rating-Text">{`${rating} (${reviews} reviews)`}</div>
        </div>
      </div>
      {/* study mode buttons */}
      <div className="Modes-Wrapper">
        {modes.map(({ t, i }) => {
          return (
            <div className="Modes-Button Card" key={t}>
              {i}
              {t}
            </div>
          );
        })}
      </div>
      {/* flashcards */}
      <div className="FC-Wrapper">
        <div className="FC Card" onClick={flip}>
          <div className="FC-Top-Controls">
            {/* card controls */}
            <div className="FC-Top-Left-Controls">
              <Lightbulb />
              {hint}
            </div>
            <div className="FC-Top-Right-Controls">
              <Volume2 />
              <Star />
            </div>
          </div>
          {/* card content */}
          <div className="FC-Content">{showDef ? def : term}</div>
          {isStart && <div className="FC-Message">{clickMessage}</div>}
        </div>
      </div>
      {/* controls */}
      <div className="Controls-Wrapper">
        <div className="Controls-Left">
          <button>
            <Play />
          </button>
          <button>
            <Shuffle />
          </button>
        </div>
        <div className="Controls-Middle">
          <button disabled={isStart} type="button" onClick={prev}>
            <CircleArrowLeft strokeWidth={1} height={48} width={48} />
          </button>
          <div>{`${current + 1} / ${cardData.length}`}</div>
          <button disabled={isEnd} type="button" onClick={next}>
            <CircleArrowRight strokeWidth={1} height={48} width={48} />
          </button>
        </div>
        <div className="Controls-Right">
          <button>
            <Maximize />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
const cssString = `.QBody {
  background-color: rgb(246 247 251 / 1);
  color: rgb(40 46 62 / 1);
  padding: 1rem;
}
.Breadcrumb-Wrapper {
  display: flex;
  flex-direction: row;
  color: rgb(88 99 128 / 1);
  font-weight: 600;
  font-size: 14px;
}
.Breadcrumb-Link {
  display: flex;
}
.Breadcrumb-Divider {
  padding: 0 0.5rem;
}
.Title-Wrapper {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.Title-Header {
  color: rgb(26 29 40 / 1);
  font-size: 2rem;
  font-weight: 700;
}
.Set-Rating {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.Set-Rating-Text {
  color: rgb(88 99 128 / 1);
  font-weight: 600;
  font-size: 14px;
}
.Modes-Wrapper {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
}
.Card {
  background-color: rgb(255 255 255 / 1);
  overflow: clip;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-colored: 0 4px 6px -1px var(--shadow-color),
    0 2px 4px -2px var(--shadow-color);
  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);
  border-radius: 0.5rem;
}
.Modes-Button {
  display: flex;
  min-width: fit-content;
  padding: 0.75rem;
  font-weight: 600;
  gap: 0.8rem;
  width: 100%;
  text-wrap: nowrap;
  justify-content: start;
}
.FC-Wrapper {
  margin-top: 1.5rem;
}
.FC {
  position: relative;
  height: 428px;
  display: flex;
  flex-direction: column;
}
.FC-Top-Controls {
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
}
.FC-Top-Left-Controls {
  display: flex;
  gap: 1rem;
}
.FC-Top-Right-Controls {
  display: flex;
  gap: 1rem;
}
.FC-Content {
  font-size: 2rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
}
.FC-Message {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1f1c8b;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
}
.Controls-Wrapper {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.Controls-Left {
  display: flex;
  justify-content: space-between;
  width: 80px;
}
.Controls-Middle {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  width: 11rem;
  font-weight: 600;
  color: rgb(88 99 128 / 1);
}
.Controls-Right {
  display: flex;
  justify-content: end;
  width: 80px;
}`;
export function CodeBlock() {
  const { current, showDef, flip, term, def, prev, next, isStart, isEnd } =
    useStuff();
  return (
    <Codeblock
      blocks={[
        {
          lang: 'css',
          code: cssString,
        },
        {
          lang: 'tsx',
          code: `<div className="QBody">
  <div className="Breadcrumb-Wrapper">
    {breadcrumbs.map((b, i) => {
      const final = i === breadcrumbs.length - 1;
      return (
        <div className="Breadcrumb-Link" key={b}>
          <a href="#">{b}</a>
          {!final && <div className="Breadcrumb-Divider">/</div>}
        </div>
      );
    })}
  </div>
  <div className="Title-Wrapper">
    <h1 className="Title-Header">{title}</h1>
    <div className="Set-Rating">
      <Star strokeWidth={0} fill="#ffcd1f" />
      <div className="Set-Rating-Text">{\`${rating} (${reviews} reviews)\`}</div>
    </div>
  </div>
  <div className="Modes-Wrapper">
    {modes.map(({ t, i }) => {
      return (
        <div className="Modes-Button Card" key={t}>
          {i}
          {t}
        </div>
      );
    })}
  </div>
  <div className="FC-Wrapper">
    <div className="FC Card" onClick={flip}>
      <div className="FC-Top-Controls">
        {/* card controls */}
        <div className="FC-Top-Left-Controls">
          <Lightbulb />
          {hint}
        </div>
        <div className="FC-Top-Right-Controls">
          <Volume2 />
          <Star />
        </div>
      </div>
      {/* card content */}
      <div className="FC-Content">{showDef ? def : term}</div>
      {isStart && <div className="FC-Message">{clickMessage}</div>}
    </div>
  </div>
  <div className="Controls-Wrapper">
    <div className="Controls-Left">
      <button>
        <Play />
      </button>
      <button>
        <Shuffle />
      </button>
    </div>
    <div className="Controls-Middle">
      <button disabled={isStart} type="button" onClick={prev}>
        <CircleArrowLeft strokeWidth={1} height={48} width={48} />
      </button>
      <div>{\`${current + 1} / ${cardData.length}\`}</div>
      <button disabled={isEnd} type="button" onClick={next}>
        <CircleArrowRight strokeWidth={1} height={48} width={48} />
      </button>
    </div>
    <div className="Controls-Right">
      <button>
        <Maximize />
      </button>
    </div>
  </div>
  <hr />
</div>
          `,
        },
      ]}
    />
  );
}
