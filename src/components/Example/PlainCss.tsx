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
