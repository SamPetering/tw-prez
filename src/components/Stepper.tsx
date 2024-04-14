'use client';

import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import Example from './Example/Index';
import { useHotkeys } from 'react-hotkeys-hook';
const steps = [
  {
    id: 'Intro',
    component: <div>content!</div>,
  },
  {
    id: 'Philosophy',
    component: <div>philosophy!</div>,
  },
  {
    id: 'Benefits',
    component: <div>benefits!</div>,
  },
  {
    id: 'Example',
    component: <Example />,
  },
  {
    id: 'Drawbacks',
    component: <div>drawbacks :/</div>,
  },
  {
    id: 'Conclusion',
    component: <div>conclusion!</div>,
  },
];

function Stepper() {
  const [step, setStep] = useState(0);
  const pRef = useRef<HTMLButtonElement>(null);
  const nRef = useRef<HTMLButtonElement>(null);
  const changeStep = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      setStep((prev) => (prev <= 0 ? steps.length - 1 : prev - 1));
    } else {
      setStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
    }
  };
  useHotkeys('ctrl+p', () => pRef.current?.click());
  useHotkeys('ctrl+n', () => nRef.current?.click());
  return (
    <div>
      {/* controls */}
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
        {/* buttons and title */}
        <div className="w-ful flex items-center justify-between">
          <button
            className={cn(
              'bg-qz-twilight500 hover:bg-qz-twilight600 text-qz-gray100',
              'w-fit rounded-md px-4 py-2 font-semibold shadow-md transition-colors'
            )}
            ref={pRef}
            onClick={() => changeStep('left')}
            type="button"
          >
            {'<C-p>'}
          </button>
          <h1 className="text-4xl font-bold">{steps[step].id}</h1>
          <button
            className={cn(
              'bg-qz-twilight500 hover:bg-qz-twilight600 text-qz-gray100',
              'w-fit rounded-md px-4 py-2 font-semibold shadow-md transition-colors'
            )}
            ref={nRef}
            onClick={() => changeStep('right')}
            type="button"
          >
            {'<C-n>'}
          </button>
        </div>
        {/* steps */}
        <div className="mx-auto flex w-full justify-between gap-4">
          {steps.map((s, i) => {
            const complete = i < step;
            const active = i === step;
            return (
              <button
                key={s.id}
                className={cn(
                  'bg-qz-mint500 h-2 w-full rounded-full transition-all',
                  complete
                    ? 'opacity-80'
                    : active
                      ? 'scale-y-125 opacity-100'
                      : 'opacity-30'
                )}
                onClick={() => setStep(i)}
                type="button"
              />
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex w-full max-w-7xl justify-center rounded-md">
        {steps[step].component}
      </div>
    </div>
  );
}

export default Stepper;
