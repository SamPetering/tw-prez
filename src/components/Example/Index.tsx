'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  PictureInPicture2,
  BookCheck,
  CopyPlus,
  WandSparkles,
  RefreshCcwDot,
} from 'lucide-react';
import PlainCss, { CodeBlock as PlainCssCodeBlock } from './PlainCss';
import StyledComponents, {
  CodeBlock as StyledComponentsCodeBlock,
} from './StyledComponents';
import Tailwind, { CodeBlock as TailwindCodeBlock } from './Tailwind';

export const title = 'U.S. State Capitals';
export const breadcrumbs = [
  'Social Science',
  'World Geography',
  'Geography of North America',
];
export const cardData = [
  { term: 'Alabama', def: 'Montgomery' },
  { term: 'Alaska', def: 'Juneau' },
  { term: 'Arizona', def: 'Pheonix' },
];
export const rating = 4.6;
export const reviews = 2_124;
export const modes = [
  {
    t: 'Flashcards',
    i: (
      <div>
        <PictureInPicture2 color="#4255FF" />
      </div>
    ),
  },
  {
    t: 'Learn',
    i: (
      <div>
        <RefreshCcwDot color="#4255FF" />
      </div>
    ),
  },
  {
    t: 'Test',
    i: (
      <div>
        <BookCheck color="#4255FF" />
      </div>
    ),
  },
  {
    t: 'Match',
    i: (
      <div>
        <CopyPlus color="#4255FF" />
      </div>
    ),
  },
  {
    t: 'Q-Chat',
    i: (
      <div>
        <WandSparkles color="#4255FF" />
      </div>
    ),
  },
];
export const hint = 'Get a hint';
export const clickMessage = 'Click the card to flip 👆';
export function useStuff() {
  const [current, setCurrent] = useState(0);
  const [showDef, setShowDef] = useState(false);
  const { term, def } = cardData[current];
  const cardCount = cardData.length;
  const prev = () => setCurrent(current - 1);
  const next = () => setCurrent(current + 1);
  const flip = () => setShowDef(!showDef);
  const isStart = current === 0;
  const isEnd = current === cardCount - 1;
  return {
    current,
    flip,
    showDef,
    term,
    def,
    prev,
    next,
    isStart,
    isEnd,
  };
}

const m = {
  'plain-css': {
    MiniFC: PlainCss,
    Codeblock: PlainCssCodeBlock,
  },
  'styled-components': {
    MiniFC: StyledComponents,
    Codeblock: StyledComponentsCodeBlock,
  },
  tailwind: {
    MiniFC: Tailwind,
    Codeblock: TailwindCodeBlock,
  },
};
function Example() {
  const [selected, setSelected] = useState<keyof typeof m>('plain-css');
  const MiniFC = m[selected].MiniFC;
  const Code = m[selected].Codeblock;

  return (
    <div className="flex w-full flex-col gap-8">
      {/* Mini FC */}
      <div className="mx-auto w-full max-w-[793px] overflow-clip rounded-md">
        <MiniFC />
      </div>
      {/* Controls */}
      <div className="mx-auto flex gap-2 text-lg">
        {Object.keys(m).map((k) => {
          const active = k === selected;
          return (
            <button
              className={cn(
                'rounded-md px-3 py-1 text-white transition-all',
                active ? 'bg-qz-twilight500' : 'text-qz-gray600'
              )}
              onClick={() => setSelected(k as keyof typeof m)}
              key={k}
              type="button"
            >
              {k}
            </button>
          );
        })}
      </div>
      {/* code block */}
      <div className="mx-auto w-full">
        <Code />
      </div>
    </div>
  );
}
export default Example;
