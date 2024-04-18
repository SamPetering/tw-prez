'use client';

import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import Example from './Example/Index';
import { useHotkeys } from 'react-hotkeys-hook';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import UtilityClassesPitch from './UtilityClassesPitch';
import twIcon from '../../public/TW.svg';
import Image from 'next/image';
const steps = [
  {
    id: 'Intro',
    component: (
      <div className="">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Image
          className="animate-bounce duration-1000"
          src={twIcon}
          height={100}
          width={200}
          alt="tw"
        />
      </div>
    ),
  },
  {
    id: 'Utility Classes',
    component: <UtilityClassesPitch />,
  },
  {
    id: 'TW Design System',
    component: (
      <div className="mx-auto w-fit">
        <h3 className="py-4 text-2xl">Screens</h3>
        <iframe
          src="https://tailwindcss.com/docs/screens"
          className="h-[800px] w-[1000px] overflow-clip rounded-md shadow-md"
        />
        <br />
        <br />
        <h3 className="py-4 text-2xl">Colors</h3>
        <iframe
          src="https://tailwindcss.com/docs/customizing-colors"
          className="h-[800px] w-[1000px] overflow-clip rounded-md shadow-md"
        />
        <br />
        <br />
        <h3 className="py-4 text-2xl">Spacing</h3>
        <iframe
          src="https://tailwindcss.com/docs/customizing-spacing"
          className="h-[800px] w-[1000px] overflow-clip rounded-md shadow-md"
        />
      </div>
    ),
  },
  {
    id: 'Example',
    component: <Example />,
  },
  // {
  //   id: 'Ecosystem',
  //   component: (
  //     <div className="mx-auto w-fit">
  //       <h3 className="py-4 text-2xl">DX / Tooling</h3>
  //       <h3 className="py-4 text-2xl">Plugins</h3>
  //       <h3 className="py-4 text-2xl">Libraries</h3>
  //       <h4 className="text-lg">ShadCN</h4>
  //       <iframe
  //         src="https://ui.shadcn.com/"
  //         className="h-[800px] w-[1200px] overflow-clip rounded-md"
  //       />
  //     </div>
  //   ),
  // },
  {
    id: 'thx ^_^',
    component: (
      <div className="">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Image
          className="animate-bounce duration-1000"
          src={twIcon}
          height={100}
          width={200}
          alt="tw"
        />
      </div>
    ),
  },
];

function Stepper() {
  const [step, setStep] = useState(0);
  const bRef = useRef<HTMLButtonElement>(null);
  const nRef = useRef<HTMLButtonElement>(null);
  const changeStep = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      setStep((prev) => (prev <= 0 ? steps.length - 1 : prev - 1));
    } else {
      setStep((prev) => (prev >= steps.length - 1 ? 0 : prev + 1));
    }
  };
  useHotkeys('ctrl+b', () => bRef.current?.click());
  useHotkeys('ctrl+n', () => nRef.current?.click());
  return (
    <div>
      {/* controls */}
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4">
        {/* buttons and title */}
        <div className="w-ful flex items-center justify-between">
          <button
            className={cn(
              'bg-qz-twilight500 text-qz-gray100 hover:bg-qz-twilight600',
              'w-fit rounded-md px-1 py-1 font-semibold shadow-md transition-colors'
            )}
            ref={bRef}
            onClick={() => changeStep('left')}
            type="button"
          >
            <ArrowLeft />
          </button>
          <h1
            key={steps[step].id}
            className="text-4xl font-bold transition-all duration-300 animate-in fade-in slide-in-from-top-4"
          >
            {steps[step].id}
          </h1>
          <button
            className={cn(
              'bg-qz-twilight500 text-qz-gray100 hover:bg-qz-twilight600',
              'w-fit rounded-md px-1 py-1 font-semibold shadow-md transition-colors'
            )}
            ref={nRef}
            onClick={() => changeStep('right')}
            type="button"
          >
            <ArrowRight />
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
                  'h-2 w-full rounded-full bg-qz-mint500 transition-all',
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
      <div
        key={steps[step].id}
        className="mt-8 flex justify-center duration-500 animate-in fade-in"
      >
        {steps[step].component}
      </div>
    </div>
  );
}

export default Stepper;
