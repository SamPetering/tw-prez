'use client';
import { ChevronsUpDown } from 'lucide-react';
import { PropsWithChildren, useState } from 'react';
import {
  CodeBlock,
  a11yDark,
  a11yLight,
  anOldHope,
  androidstudio,
  arta,
  atomOneDark,
  atomOneLight,
  codepen,
  dracula,
  far,
  github,
  googlecode,
  hopscotch,
  hybrid,
  irBlack,
  monoBlue,
  monokaiSublime,
  monokai,
  nord,
  noctisViola,
  obsidian,
  ocean,
  paraisoDark,
  paraisoLight,
  pojoaque,
  purebasic,
  railscast,
  rainbow,
  shadesOfPurple,
  solarizedDark,
  solarizedLight,
  sunburst,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  vs2015,
  xt256,
  zenburn,
} from 'react-code-blocks';
import reactElementToJSXString from 'react-element-to-jsx-string';
const AllThemeKeys = [
  'A11y Dark',
  'A11y Light',
  'An Old Hope',
  'Androidstudio',
  'Arta',
  'Atom One Dark',
  'Atom One Light',
  'Codepen',
  'Dracula',
  'Far',
  'Github',
  'Googlecode',
  'Hopscotch',
  'Hybrid',
  'Ir Black',
  'Mono Blue',
  'Monokai Sublime',
  'Monokai',
  'Nord',
  'Noctis Viola',
  'Obsidian',
  'Ocean',
  'Paraiso Dark',
  'Paraiso Light',
  'Pojoaque',
  'Purebasic',
  'Railscast',
  'Rainbow',
  'Shades Of Purple',
  'Solarized Dark',
  'Solarized Light',
  'Sunburst',
  'Tomorrow Night Blue',
  'Tomorrow Night Bright',
  'Tomorrow Night Eighties',
  'Tomorrow Night',
  'Tomorrow',
  'Vs2015',
  'Xt256',
  'Zenburn',
] as const;
type ThemeKey = (typeof AllThemeKeys)[number];
const THEME_MAP: Record<ThemeKey, Record<string, string | undefined>> = {
  'A11y Dark': a11yDark,
  'A11y Light': a11yLight,
  'An Old Hope': anOldHope,
  Androidstudio: androidstudio,
  Arta: arta,
  'Atom One Dark': atomOneDark,
  'Atom One Light': atomOneLight,
  Codepen: codepen,
  Dracula: dracula,
  Far: far,
  Github: github,
  Googlecode: googlecode,
  Hopscotch: hopscotch,
  Hybrid: hybrid,
  'Ir Black': irBlack,
  'Mono Blue': monoBlue,
  'Monokai Sublime': monokaiSublime,
  Monokai: monokai,
  Nord: nord,
  'Noctis Viola': noctisViola,
  Obsidian: obsidian,
  Ocean: ocean,
  'Paraiso Dark': paraisoDark,
  'Paraiso Light': paraisoLight,
  Pojoaque: pojoaque,
  Purebasic: purebasic,
  Railscast: railscast,
  Rainbow: rainbow,
  'Shades Of Purple': shadesOfPurple,
  'Solarized Dark': solarizedDark,
  'Solarized Light': solarizedLight,
  Sunburst: sunburst,
  'Tomorrow Night Blue': tomorrowNightBlue,
  'Tomorrow Night Bright': tomorrowNightBright,
  'Tomorrow Night Eighties': tomorrowNightEighties,
  'Tomorrow Night': tomorrowNight,
  Tomorrow: tomorrow,
  Vs2015: vs2015,
  Xt256: xt256,
  Zenburn: zenburn,
};
export default function Codeblock({
  children,
  theme,
  blocks,
}: PropsWithChildren<{
  theme?: ThemeKey;
  blocks?: Array<{ lang: string; code: string }>;
}>) {
  const code = reactElementToJSXString(children || <></>, {
    showFunctions: true,
  });
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>(
    theme || 'A11y Light'
  );
  const currentTheme = THEME_MAP[selectedTheme];
  return (
    <div className="w-full">
      <div className="group relative mb-4 w-fit shadow-sm">
        <div className="pointer-events-none absolute right-4 top-2 cursor-pointer">
          <ChevronsUpDown color="black" height={16} width={16} />
        </div>
        <select
          name="themes"
          className="cursor-pointer appearance-none rounded-md px-4 py-1"
          onChange={(e) => setSelectedTheme(e.target.value as ThemeKey)}
          defaultValue={selectedTheme}
        >
          {AllThemeKeys.map((k) => (
            <option value={k} key={k}>
              {k}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full gap-4">
        {blocks &&
          blocks?.length > 0 &&
          blocks?.map((b, i) => (
            <div
              key={b.lang + i}
              className="roudned-md h-fit w-full overflow-clip shadow-md"
            >
              <CodeBlock
                text={b.code}
                language={b.lang}
                theme={currentTheme}
                showLineNumbers={false}
                wrapLongLines={true}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
