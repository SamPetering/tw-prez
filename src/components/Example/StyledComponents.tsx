import styled, { css } from 'styled-components';
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
const QBody = styled.div`
  background-color: rgb(246 247 251 / 1);
  color: rgb(40 46 62 / 1);
  padding: 1rem;
`;
const BreadcrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: rgb(88 99 128 / 1);
  font-weight: 600;
  font-size: 14px;
`;
const BreadcrumbLink = styled.div`
  display: flex;
`;
const BreadcrumbDivider = styled.div`
  padding: 0 0.5rem;
`;
const TitleWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
const TitleHeader = styled.h1`
  color: rgb(26 29 40 / 1);
  font-size: 2rem;
  font-weight: 700;
`;
const SetRating = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const SetRatingText = styled.div`
  color: rgb(88 99 128 / 1);
  font-weight: 600;
  font-size: 14px;
`;
const ModesWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;
const Card = css`
  background-color: rgb(255 255 255 / 1);
  overflow: clip;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-colored: 0 4px 6px -1px var(--shadow-color),
    0 2px 4px -2px var(--shadow-color);
  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);
  border-radius: 0.5rem;
`;
const ModesButton = styled.div`
  ${Card}
  display: flex;
  min-width: fit-content;
  padding: 0.75rem;
  font-weight: 600;
  width: 100%;
  gap: 0.8rem;
  text-wrap: nowrap;
  justify-content: start;
`;
const FCWrapper = styled.div`
  margin-top: 1.5rem;
`;
const FC = styled.div`
  ${Card}
  position: relative;
  height: 428px;
  display: flex;
  flex-direction: column;
`;
const FCTopControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
`;
const FCTopLeftControls = styled.div`
  display: flex;
  gap: 1rem;
`;
const FCTopRightControls = styled.div`
  display: flex;
  gap: 1rem;
`;
const FCContent = styled.div`
  font-size: 2rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
`;
const FCMessage = styled.div`
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
`;
const ControlsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const ControlsLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
`;
const ControlsMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  width: 11rem;
  font-weight: 600;
  color: rgb(88 99 128 / 1);
`;
const ControlsRight = styled.div`
  display: flex;
  justify-content: end;
  width: 80px;
`;

export default function StyledComponents() {
  const { current, showDef, flip, term, def, prev, next, isStart, isEnd } =
    useStuff();
  return (
    <QBody>
      {/* breadcrumbs */}
      <BreadcrumbWrapper>
        {breadcrumbs.map((b, i) => (
          <BreadcrumbLink key={b}>
            <a href="#">{b}</a>
            {i !== breadcrumbs.length - 1 && (
              <BreadcrumbDivider>/</BreadcrumbDivider>
            )}
          </BreadcrumbLink>
        ))}
      </BreadcrumbWrapper>
      {/* title */}
      <TitleWrapper>
        <TitleHeader>{title}</TitleHeader>
        <SetRating>
          <Star strokeWidth={0} fill="#ffcd1f" />
          <SetRatingText>{`${rating} (${reviews} reviews)`}</SetRatingText>
        </SetRating>
      </TitleWrapper>
      {/* study mode buttons */}
      <ModesWrapper>
        {modes.map(({ t, i }) => (
          <ModesButton key={t}>
            {i}
            {t}
          </ModesButton>
        ))}
      </ModesWrapper>
      {/* flashcards */}
      <FCWrapper>
        <FC onClick={flip}>
          <FCTopControls>
            <FCTopLeftControls>
              <Lightbulb />
              {hint}
            </FCTopLeftControls>
            <FCTopRightControls>
              <Volume2 />
              <Star />
            </FCTopRightControls>
          </FCTopControls>

          <FCContent>{showDef ? def : term}</FCContent>
          {isStart && <FCMessage>{clickMessage}</FCMessage>}
        </FC>
      </FCWrapper>
      {/* controls */}
      <ControlsWrapper>
        <ControlsLeft>
          <button>
            <Play />
          </button>
          <button>
            <Shuffle />
          </button>
        </ControlsLeft>
        <ControlsMiddle>
          <button disabled={isStart} type="button" onClick={prev}>
            <CircleArrowLeft strokeWidth={1} height={48} width={48} />
          </button>
          <div>{`${current + 1} / ${cardData.length}`}</div>
          <button disabled={isEnd} type="button" onClick={next}>
            <CircleArrowRight strokeWidth={1} height={48} width={48} />
          </button>
        </ControlsMiddle>
        <ControlsRight>
          <button>
            <Maximize />
          </button>
        </ControlsRight>
      </ControlsWrapper>
      <hr />
    </QBody>
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
          code: `const QBody = styled.div\`
  background-color: rgb(246 247 251 / 1);
  color: rgb(40 46 62 / 1);
  padding: 1rem;
  \`;
const BreadcrumbWrapper = styled.div\`
  display: flex;
  flex-direction: row;
  color: rgb(88 99 128 / 1);
  font-weight: 600;
  font-size: 14px;
\`;
const BreadcrumbLink = styled.div\`
  display: flex;
\`;
const BreadcrumbDivider = styled.div\`
  padding: 0 0.5rem;
\`;
const TitleWrapper = styled.div\`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
\`;
const TitleHeader = styled.h1\`
  color: rgb(26 29 40 / 1);
  font-size: 2rem;
  font-weight: 700;
\`;
const SetRating = styled.div\`
  display: flex;
  gap: 0.5rem;
  align-items: center;
\`;
const SetRatingText = styled.div\`
  color: rgb(88 99 128 / 1);
  font-weight: 600;
  font-size: 14px;
\`;
const ModesWrapper = styled.div\`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
\`;
const Card = css\`
  background-color: rgb(255 255 255 / 1);
  overflow: clip;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-colored: 0 4px 6px -1px var(--shadow-color),
    0 2px 4px -2px var(--shadow-color);
  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);
  border-radius: 0.5rem;
\`;
const ModesButton = styled.div\`
  \${Card}
  display: flex;
  min-width: fit-content;
  padding: 0.75rem;
  font-weight: 600;
  width: 100%;
  gap: 0.8rem;
  text-wrap: nowrap;
  justify-content: start;
\`;
const FCWrapper = styled.div\`
  margin-top: 1.5rem;
\`;
const FC = styled.div\`
  \${Card}
  position: relative;
  height: 428px;
  display: flex;
  flex-direction: column;
\`;
const FCTopControls = styled.div\`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
\`;
const FCTopLeftControls = styled.div\`
  display: flex;
  gap: 1rem;
\`;
const FCTopRightControls = styled.div\`
  display: flex;
  gap: 1rem;
\`;
const FCContent = styled.div\`
  font-size: 2rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
\`;
const FCMessage = styled.div\`
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
\`;
const ControlsWrapper = styled.div\`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
\`;
const ControlsLeft = styled.div\`
  display: flex;
  justify-content: space-between;
  width: 80px;
\`;
const ControlsMiddle = styled.div\`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  width: 11rem;
  font-weight: 600;
  color: rgb(88 99 128 / 1);
\`;
const ControlsRight = styled.div\`
  display: flex;
  justify-content: end;
  width: 80px;
\`;`,
        },
        {
          lang: 'jsx',
          code: `<QBody>
  <BreadcrumbWrapper>
    {breadcrumbs.map((b, i) => (
      <BreadcrumbLink key={b}>
        <a href="#">{b}</a>
        {i !== breadcrumbs.length - 1 && (
          <BreadcrumbDivider>/</BreadcrumbDivider>
        )}
      </BreadcrumbLink>
    ))}
  </BreadcrumbWrapper>
  <TitleWrapper>
    <TitleHeader>{title}</TitleHeader>
    <SetRating>
      <Star strokeWidth={0} fill="#ffcd1f" />
      <SetRatingText>{\`${rating} (${reviews} reviews)\`}</SetRatingText>
    </SetRating>
  </TitleWrapper>
  <ModesWrapper>
    {modes.map(({ t, i }) => (
      <ModesButton key={t}>
        {i}
        {t}
      </ModesButton>
    ))}
  </ModesWrapper>
  <FCWrapper>
    <FC onClick={flip}>
      <FCTopControls>
        <FCTopLeftControls>
          <Lightbulb />
          {hint}
        </FCTopLeftControls>
        <FCTopRightControls>
          <Volume2 />
          <Star />
        </FCTopRightControls>
      </FCTopControls>

      <FCContent>{showDef ? def : term}</FCContent>
      {isStart && <FCMessage>{clickMessage}</FCMessage>}
    </FC>
  </FCWrapper>
  <ControlsWrapper>
    <ControlsLeft>
      <button>
        <Play />
      </button>
      <button>
        <Shuffle />
      </button>
    </ControlsLeft>
    <ControlsMiddle>
      <button disabled={isStart} type="button" onClick={prev}>
        <CircleArrowLeft strokeWidth={1} height={48} width={48} />
      </button>
      <div>{\`${current + 1} / ${cardData.length}\`}</div>
      <button disabled={isEnd} type="button" onClick={next}>
        <CircleArrowRight strokeWidth={1} height={48} width={48} />
      </button>
    </ControlsMiddle>
    <ControlsRight>
      <button>
        <Maximize />
      </button>
    </ControlsRight>
  </ControlsWrapper>
  <hr />
</QBody>`,
        },
      ]}
    />
  );
}
