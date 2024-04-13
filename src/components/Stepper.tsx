'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

function Stepper() {
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
      component: <div>example!</div>,
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
  const [step, setStep] = useState(0);
  const changeStep = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      setStep((prev) => (prev <= 0 ? steps.length - 1 : prev - 1));
    } else {
      setStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
    }
  };
  return (
    <div className="mt-6">
      {/* controls */}
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
        {/* buttons and title */}
        <div className="w-ful flex justify-between">
          <button
            className="flex aspect-square items-center justify-center rounded-md border-[1.5px] border-zinc-300 px-2 text-sm text-zinc-200 transition-colors hover:border-green-300 hover:text-green-300"
            onClick={() => changeStep('left')}
            type="button"
          >
            {'<-'}
          </button>
          <div>{steps[step].id}</div>
          <button
            className="flex aspect-square items-center justify-center rounded-md border-[1.5px] border-zinc-300 px-2 text-sm text-zinc-200 transition-colors hover:border-green-300 hover:text-green-300"
            onClick={() => changeStep('right')}
            type="button"
          >
            {'->'}
          </button>
        </div>
        {/* steps */}
        <div className="mx-auto flex w-full justify-between gap-2">
          {steps.map((s, i) => {
            const complete = i < step;
            const active = i === step;
            return (
              <button
                key={s.id}
                className={cn(
                  'h-2 w-full max-w-14 rounded-full bg-green-500 transition-all',
                  complete
                    ? 'bg-green-500 opacity-80'
                    : active
                      ? 'scale-125 opacity-100'
                      : 'bg-green-300 opacity-30'
                )}
                onClick={() => setStep(i)}
                type="button"
              />
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex justify-center">{steps[step].component}</div>
    </div>
  );
}

export default Stepper;
