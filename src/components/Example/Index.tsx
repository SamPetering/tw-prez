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
import PlainCss from './PlainCss';
import StyledComponents from './StyledComponents';
import Tailwind from './Tailwind';

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
    i: <PictureInPicture2 color="#4255FF" />,
  },
  {
    t: 'Learn',
    i: <RefreshCcwDot color="#4255FF" />,
  },
  {
    t: 'Test',
    i: <BookCheck color="#4255FF" />,
  },
  {
    t: 'Match',
    i: <CopyPlus color="#4255FF" />,
  },
  {
    t: 'Q-Chat',
    i: <WandSparkles color="#4255FF" />,
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
  'plain-css': PlainCss,
  'styled-components': StyledComponents,
  tailwind: Tailwind,
};
function Example() {
  const [selected, setSelected] = useState<keyof typeof m>('plain-css');
  const Current = m[selected];
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex justify-center">example time</div>
      <div className="overflow-clip rounded-md">
        <Current />
      </div>
      <div className="flex gap-2 text-lg">
        {Object.keys(m).map((k) => {
          const active = k === selected;
          return (
            <button
              className={cn(
                'transition-all',
                active ? 'text-green-500' : 'text-zinc-500'
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
    </div>
  );
}
export default Example;
