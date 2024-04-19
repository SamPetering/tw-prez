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
  breadcrumbs,
  cardData,
  clickMessage,
  hint,
  modes,
  rating,
  reviews,
  title,
  useStuff,
} from './Index';
import Codeblock from './Codeblocks';

export default function Tailwind() {
  const { current, showDef, flip, term, def, prev, next, isStart, isEnd } =
    useStuff();
  return (
    <div className="bg-qz-gray200 p-4 text-gray-800">
      {/* breadcrumbs */}
      <div className="flex text-[14px] font-semibold text-gray-600">
        {breadcrumbs.map((b, i) => {
          const final = i === breadcrumbs.length - 1;
          return (
            <div className="flex" key={b}>
              <a href="#">{b}</a>
              {!final && <div className="px-2">/</div>}
            </div>
          );
        })}
      </div>
      {/* title */}
      <div className="mt-4 flex flex-col">
        <h1 className="text-[2rem] font-bold text-qz-gray900">{title}</h1>
        <div className="flex items-center gap-2">
          <Star strokeWidth={0} fill="#ffcd1f" />
          <div className="text-[14px] font-semibold text-gray-600">{`${rating} (${reviews} reviews)`}</div>
        </div>
      </div>
      {/* study mode buttons */}
      <div className="mt-4 flex justify-between gap-3">
        {modes.map(({ t, i }) => {
          return (
            <div
              className="flex w-full min-w-fit justify-start gap-[0.8rem] overflow-clip text-nowrap rounded-md bg-white p-3 font-semibold shadow-md"
              key={t}
            >
              {i}
              {t}
            </div>
          );
        })}
      </div>
      {/* flashcards */}
      <div className="mt-6">
        <div
          className="relative flex h-[428px] flex-col overflow-clip rounded-[0.5rem] bg-white shadow-md duration-300 animate-in slide-in-from-left-full"
          onClick={flip}
          key={def}
        >
          {/* card controls */}
          <div className="flex justify-between px-12 py-8">
            <div className="flex gap-4">
              <Lightbulb />
              {hint}
            </div>
            <div className="flex gap-4">
              <Volume2 />
              <Star />
            </div>
          </div>
          {/* card content */}
          <div className="flex flex-grow flex-col justify-center pb-8 text-center text-[2rem]">
            {showDef ? def : term}
          </div>
          {isStart && (
            <div className="absolute bottom-0 left-0 right-0 bg-qz-twilight700 p-2 text-center font-semibold text-white">
              {clickMessage}
            </div>
          )}
        </div>
      </div>
      {/* controls */}
      <div className="mb-4 mt-4 flex justify-between">
        <div className="flex w-[80px] justify-between">
          <button>
            <Play />
          </button>
          <button>
            <Shuffle />
          </button>
        </div>
        <div className="flex w-[11rem] items-center justify-between gap-4 font-semibold text-qz-gray600">
          {/* LEFT BUTTON */}
          <button
            className="disabled:text-qz-gray400"
            disabled={isStart}
            onClick={prev}
          >
            <CircleArrowLeft strokeWidth={1} height={48} width={48} />
          </button>
          <div>{`${current + 1} / ${cardData.length}`}</div>
          {/* RIGHT BUTTON */}
          <button
            className="disabled:text-qz-gray400"
            disabled={isEnd}
            onClick={next}
          >
            <CircleArrowRight strokeWidth={1} height={48} width={48} />
          </button>
        </div>
        <div className="flex w-[80px] justify-end">
          <button>
            <Maximize />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export function CodeBlock() {
  const { current, showDef, flip, term, def, prev, next, isStart, isEnd } =
    useStuff();
  return (
    <Codeblock
      blocks={[
        {
          lang: 'tsx',
          code: `<div className="bg-qz-gray200 p-4 text-gray-800">
  {/* breadcrumbs */}
  <div className="flex text-[14px] font-semibold text-gray-600">
    {breadcrumbs.map((b, i) => {
      const final = i === breadcrumbs.length - 1;
      return (
        <div className="flex" key={b}>
          <a href="#">{b}</a>
          {!final && <div className="px-2">/</div>}
        </div>
      );
    })}
  </div>
  {/* title */}
  <div className="mt-4 flex flex-col">
    <h1 className="text-qz-gray900 text-[2rem] font-bold">{title}</h1>
    <div className="flex items-center gap-2">
      <Star strokeWidth={0} fill="#ffcd1f" />
      <div className="text-[14px] font-semibold text-gray-600">{\`${rating} (${reviews} reviews)\`}</div>
    </div>
  </div>
  {/* study mode buttons */}
  <div className="mt-4 flex justify-between gap-4">
    {modes.map(({ t, i }) => {
      return (
        <div
          className="flex w-full min-w-fit justify-start gap-[0.8rem] overflow-clip text-nowrap rounded-md bg-white p-3 font-semibold shadow-md"
          key={t}
        >
          {i}
          {t}
        </div>
      );
    })}
  </div>
  {/* flashcards */}
  <div className="mt-6">
    <div
      className="relative flex h-[428px] flex-col overflow-clip rounded-[0.5rem] bg-white shadow-md"
      onClick={flip}
    >
      {/* card controls */}
      <div className="flex justify-between px-12 py-8">
        <div className="flex gap-4">
          <Lightbulb />
          {hint}
        </div>
        <div className="flex gap-4">
          <Volume2 />
          <Star />
        </div>
      </div>
      {/* card content */}
      <div className="flex flex-grow flex-col justify-center pb-8 text-center text-[2rem]">
        {showDef ? def : term}
      </div>
      {isStart && (
        <div className="bg-qz-twilight700 absolute bottom-0 left-0 right-0 p-2 text-center font-semibold text-white">
          {clickMessage}
        </div>
      )}
    </div>
  </div>
  {/* controls */}
  <div className="mb-4 mt-4 flex justify-between">
    <div className="flex w-[80px] justify-between">
      <button>
        <Play />
      </button>
      <button>
        <Shuffle />
      </button>
    </div>
    <div className="text-qz-gray600 flex w-[11rem] items-center justify-between gap-4 font-semibold">
      <button>
        <CircleArrowLeft strokeWidth={1} height={48} width={48} />
      </button>
      <div>{\`${current + 1} / ${cardData.length}\`}</div>
      <button>
        <CircleArrowRight strokeWidth={1} height={48} width={48} />
      </button>
    </div>
    <div className="flex w-[80px] justify-end">
      <button>
        <Maximize />
      </button>
    </div>
  </div>
  <hr />
</div>`,
        },
      ]}
    />
  );
}
