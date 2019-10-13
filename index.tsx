import React from "react"
import ReactDOM from "react-dom"
import { Presentation, Slide, SlideProps } from "presa"
import { CenteredLayout } from "presa/lib/components/slide"
import { Code } from "presa/lib/blocks"
import styled, { css, injectGlobal } from "styled-components"

import MathLadyJpg from "./assets/mathlady.jpg"
import JirikJpg from "./assets/jirik.jpg"
import FreedivingJpg from "./assets/freediving.jpg"
import Freediving2Jpg from "./assets/freediving2.jpg"
import ArchimedesJpg from "./assets/archimedes.jpg"
import CaptainObviousPng from "./assets/captain_obvious.png"
import DiveJpg from "./assets/dive.jpg"
import FreediverFloatingJpg from "./assets/freediver_floating.jpg"
import FreediverGoingDownJpg from "./assets/freediver_going_down.jpg"
import FreediverRelaxedJpg from "./assets/freediver_relaxed.jpg"
import FreediverGoingUpJpg from "./assets/freediver_going_up.jpg"
import LogoPng from "./assets/logo.png"
import LogoDarkPng from "./assets/logo_dark.png"
import TwitterLogoSvg from "./assets/Twitter_Logo_Blue.svg"
import GithubLogoLightPng from "./assets/GitHub-Mark-Light-120px-plus.png"
import GithubLogoPng from "./assets/GitHub-Mark-120px-plus.png"
import CaligulaJpg from "./assets/caligula.jpg"
import AwareJpg from "./assets/aware.jpg"

const Deck = () => (
  <MyPresentation>
    <MySlide name="Initial" dark background={FreedivingJpg}>
      <CenteredLayout>
        <Inverted>
          <AbsoluteYPosition y="20%" style={{ width: "100%" }}>
            <H1 style={{ fontSize: "50px", marginBottom: "70px" }}>
              Freediving into Typescript
            </H1>
          </AbsoluteYPosition>
          <AbsoluteYPosition y="85%">
            <H2 style={{ marginBottom: "60px" }}>Michael Bashurov</H2>
          </AbsoluteYPosition>
        </Inverted>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Fearful terms" dark background={MathLadyJpg}></MySlide>

    <MySlide
      name="Don't lie and don't fear!"
      dark
      background={JirikJpg}
    ></MySlide>

    <MySlide name="Freediving" dark background={Freediving2Jpg}></MySlide>

    <MySlide name="Archimedes principle" background={ArchimedesJpg}></MySlide>

    <MySlide name="Tagged union">
      <CenteredLayout>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>Sum type</H1>
        <Hidden>
          <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>Variant</H1>
        </Hidden>
        <Hidden>
          <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>
            Discriminated union
          </H1>
        </Hidden>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Tagged union">
      <CenteredLayout>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>Sum type</H1>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>Variant</H1>
        <Hidden>
          <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>
            Discriminated union
          </H1>
        </Hidden>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Tagged union">
      <CenteredLayout>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>Sum type</H1>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>Variant</H1>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>
          Discriminated union
        </H1>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Sum type">
      <CenteredLayout>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>
          Sum type is a sum of product types
        </H1>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Captain obvious" dark background={CaptainObviousPng}>
      <Inverted>
        <AbsoluteYPosition y="75%">
          <H1
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "60px",
              fontWeight: 600
            }}
          >
            You're welcome!
          </H1>
        </AbsoluteYPosition>
      </Inverted>
    </MySlide>

    <MySlide name="Intersection">
      <CenteredLayout>
        <Code language="typescript">{`type Task = { id: number, whoCreated: number }`}</Code>
        <Hidden>
          <Code language="typescript">{`type Task = { id: number } & { whoCreated: number }`}</Code>
        </Hidden>
        <Hidden>
          <Code language="typescript">{`type RichString = string & { leftPad: (toLength: number) => string }`}</Code>
        </Hidden>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Intersection">
      <CenteredLayout>
        <Code language="typescript">{`type Task = { id: number, whoCreated: number }`}</Code>
        <Code language="typescript">{`type Task = { id: number } & { whoCreated: number }`}</Code>
        <Hidden>
          <Code language="typescript">{`type RichString = string & { leftPad: (toLength: number) => string }`}</Code>
        </Hidden>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Intersection">
      <CenteredLayout>
        <Code language="typescript">{`type Task = { id: number, whoCreated: number }`}</Code>
        <Code language="typescript">{`type Task = { id: number } & { whoCreated: number }`}</Code>
        <Code language="typescript">{`type RichString = string & { leftPad: (toLength: number) => string }`}</Code>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Simple union">
      <CenteredLayout>
        <Code language="typescript">{`type Width = string | number`}</Code>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Complex union">
      <CenteredLayout>
        <Code language="typescript">
          {`type InitialTask = { id: number, whoCreated: number }
type InWorkTask = { id: number, whoCreated: number }
type FinishedTask = { id: number, whoCreated: number, finishDate: Date }

type Task = InitialTask | InWorkTask | FinishedTask`}
        </Code>
      </CenteredLayout>
    </MySlide>

    <MySlide name="ReasonML Variant">
      <CenteredLayout>
        <Code language="reason">
          {`type Task =
| Initial({ id: int, whoCreated: int })
| InWork({ id: int, whoCreated: int })
| Finished({ 
    id: int,
    whoCreated: int,
    finishDate: Date 
  })`}
        </Code>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Demo: Reducer typing with ADT">
      <CenteredLayout>
        <GithubFileLink filePath="duReduxEnd.ts">
          <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>
            Demo: Reducer typing with sum types
          </H1>
        </GithubFileLink>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Try hard!" dark background={DiveJpg}>
      <Inverted>
        <AbsoluteYPosition y="53%">
          <H1>Try hard!</H1>
        </AbsoluteYPosition>
      </Inverted>
    </MySlide>

    <MySlide
      name="Neutral position"
      background={FreediverFloatingJpg}
      dark
    ></MySlide>

    <MySlide dark background={CaligulaJpg}></MySlide>

    <MySlide name="Demo: Nominal primitives with branding">
      <CenteredLayout>
        <GithubFileLink filePath="nominalEnd.tsx">
          <H1>Demo: Nominal primitives with branding</H1>
        </GithubFileLink>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Be aware" dark background={AwareJpg}>
      <CenteredLayout>
        <Inverted>
          <AbsoluteYPosition y="55%">
            <H1>Be aware</H1>
          </AbsoluteYPosition>
        </Inverted>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Free fall" dark background={FreediverGoingDownJpg}></MySlide>

    <MySlide name="Demo: Reducer typing with inference">
      <CenteredLayout>
        <GithubFileLink filePath="duInferenceEnd.ts">
          <H1>Demo: Reducer typing with inference</H1>
        </GithubFileLink>
      </CenteredLayout>
    </MySlide>

    <MySlide name="infer">
      <VerticallyCenteredLayout>
        <Code language="typescript">{`type AnyFunction = (...args: any) => any`}</Code>
      </VerticallyCenteredLayout>
    </MySlide>

    <MySlide name="infer">
      <VerticallyCenteredLayout>
        <Code language="typescript">{`type AnyFunction = (...args: any) => infer R`}</Code>
      </VerticallyCenteredLayout>
    </MySlide>

    <MySlide name="infer">
      <VerticallyCenteredLayout>
        <Code language="typescript">{`type AnyFunction = (...args: infer P) => any`}</Code>
      </VerticallyCenteredLayout>
    </MySlide>

    <MySlide name="Relax" dark background={FreediverRelaxedJpg}>
      <CenteredLayout>
        <Inverted>
          <AbsoluteYPosition y="70%">
            <H1>Relax</H1>
          </AbsoluteYPosition>
        </Inverted>
      </CenteredLayout>
    </MySlide>

    <MySlide name="But don't black out" dark background={FreediverGoingUpJpg}>
      <CenteredLayout>
        <Inverted>
          <AbsoluteYPosition y="60%">
            <H1>But don't black out</H1>
          </AbsoluteYPosition>
        </Inverted>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Questions?">
      <CenteredLayout>
        <Link url="https://github.com/saitonakamura/freediving-into-typescript">
          <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>
            http://bit.ly/ts-freedive
          </H1>
        </Link>
        <H1 style={{ fontFamily: "Open Sans, sans-serif" }}>🐱 ❓</H1>
        <H3
          style={{ fontFamily: "Open Sans, sans-serif", marginBottom: "0px" }}
        >
          <Twitter
            dark={false}
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            @saitonakamura
          </Twitter>
        </H3>
        <H3 style={{ fontFamily: "Open Sans, sans-serif", marginTop: "0px" }}>
          <Github
            style={{ display: "flex", alignItems: "center" }}
            dark={false}
          >
            saitonakamura
          </Github>
        </H3>
      </CenteredLayout>
    </MySlide>
  </MyPresentation>
)

const MyPresentation = styled(Presentation)``

const MySlide: React.FC<SlideProps & { dark?: boolean }> = ({
  children,
  dark = false,
  ...rest
}) => (
  <Slide {...rest}>
    {children}
    <AbsolutePosition x="0.5%" y="87%">
      <img src={dark ? LogoPng : LogoDarkPng} style={{ width: "150px" }} />
    </AbsolutePosition>

    <AbsolutePosition x="87%" y="87%">
      <Twitter dark={dark} />
      <Github dark={dark} />
    </AbsolutePosition>
  </Slide>
)

const HeaderStyle = css`
  font-family: Raleway, sans-serif;
  font-weight: 300;
`

const H1 = styled.h1`
  ${HeaderStyle}
`
const H2 = styled.h2`
  ${HeaderStyle}
`
const H3 = styled.h3`
  ${HeaderStyle}
`
const H4 = styled.h4`
  ${HeaderStyle}
`
const H5 = styled.h5`
  ${HeaderStyle}
`
const H6 = styled.h6`
  ${HeaderStyle}
`

const Twitter: React.FC<{ dark: boolean } & Stylable> = ({
  children,
  dark,
  ...rest
}) => (
  <Link url="https://twitter.com/saitonakamura" targetBlank {...rest}>
    <img src={TwitterLogoSvg} height="70px" />
    {children}
  </Link>
)

const Github: React.FC<{ dark: boolean } & Stylable> = ({
  children,
  dark,
  ...rest
}) => (
  <Link url="https://github.com/saitonakamura" targetBlank {...rest}>
    <img
      src={dark ? GithubLogoLightPng : GithubLogoPng}
      height="40px"
      style={{ margin: "10px" }}
    />
    {children}
  </Link>
)

const GithubFileLink: React.FC<{ filePath: string }> = ({
  filePath,
  children,
  ...rest
}) => (
  <Link
    url={`https:///github.com/saitonakamura/freediving-into-typescript/blob/master/${filePath}`}
    {...rest}
  >
    {children}
  </Link>
)

const Link: React.FC<{ url: string; targetBlank?: boolean }> = ({
  url,
  targetBlank = false,
  children,
  ...rest
}) => (
  <a
    href={url}
    target={targetBlank ? "_blank" : ""}
    rel={targetBlank ? "noreferrer noopener" : ""}
    {...rest}
  >
    {children}
  </a>
)

const Inverted = styled.div`
  display: contents;
  color: white;
  ${H1}, ${H2}, ${H3}, ${H4}, ${H5}, ${H6} {
    text-shadow: black 0 0 20px;
  }
`

const AbsoluteYPosition: React.FC<
  { y: React.CSSProperties["top"] } & Stylable
> = ({ y, style, ...rest }) => (
  <AbsolutePosition
    y={y}
    x="50%"
    style={{ ...style, transform: "translateX(-50%)" }}
    {...rest}
  />
)

const AbsolutePosition: React.FC<
  {
    x: React.CSSProperties["left"]
    y: React.CSSProperties["top"]
  } & Stylable
> = ({ x, y, style, children, ...rest }) => (
  <CenterFlex
    style={{ ...style, position: "absolute", top: y, left: x }}
    {...rest}
  >
    {children}
  </CenterFlex>
)

const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

injectGlobal`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}`

const VerticallyCenteredLayout = styled(CenteredLayout)`
  align-items: flex-start;
`

const Hidden = styled.div`
  visibility: hidden;
`

// Make sure you render into a full-page container
ReactDOM.render(<Deck />, document.getElementById("root"))
