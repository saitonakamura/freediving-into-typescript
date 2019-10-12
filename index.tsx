import React from "react"
import ReactDOM from "react-dom"
import { Presentation, Slide } from "presa"
import { CenteredLayout } from "presa/lib/components/slide"
import { Code } from "presa/lib/blocks"
import styled, { css } from "styled-components"

const Deck = () => (
  <MyPresentation>
    <MySlide name="Initial">
      <CenteredLayout>
        <H1>Freediving into Typescript</H1>
        <H3>Michael Bashurov</H3>
        <Bottomed>
          <Twitter />
          <Github />
        </Bottomed>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Fearful terms" background="woman_confused.jpg">
      Woman looking at formulas, confused
    </MySlide>

    <MySlide name="Don't lie and don't fear!" background="jirik.jpg">
      Don't lie and don't fear!
    </MySlide>

    <MySlide name="Freediving" background="freediving.jpg"></MySlide>

    <MySlide name="Arhimed law">Arhimed law and dive struggle</MySlide>

    <MySlide name="ADT">
      <CenteredLayout>
        <H1>Algebraic data types</H1>
        {/* <Fragment> */}
        <H1>Sum type</H1>
        {/* </Fragment> */}
        {/* <Fragment> */}
        <H1>Variant</H1>
        {/* </Fragment> */}
        {/* <Fragment> */}
        <H1>Sum type</H1>
        {/* </Fragment> */}
        {/* <Fragment> */}
        <H1>Discriminated union</H1>
        {/* </Fragment> */}
      </CenteredLayout>
    </MySlide>

    <MySlide name="Sum type">
      <CenteredLayout>
        <H2>Sum type is a sum of multiplication type</H2>
      </CenteredLayout>
    </MySlide>

    <MySlide
      name="Captain obvious"
      background="captain_obvious_youre_welcome.jpg"
    ></MySlide>

    <MySlide name="Intersection">
      <CenteredLayout>
        <Code>{`type Task = { id: number, whoCreated: number }`}</Code>
        <Code>{`type Task = { id: number } & { whoCreated: number }`}</Code>
        <Code>{`type RichString = string & { leftPad: (toLength: number) => string }`}</Code>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Simple union">
      <CenteredLayout>
        <Code>{`type Width = string | number`}</Code>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Complex union">
      <CenteredLayout>
        <Code>
          {`type InitialTask = { id: number, whoCreated: number }
type InWorkTask = { id: number, whoCreated: number }
type FinishedTask = { id: number, whoCreated: number, finishDate: Date }

type Task = InitialTask | InWorkTask | FinishedTask`}
        </Code>
      </CenteredLayout>
    </MySlide>

    <MySlide name="ReasonML Variant">
      <Code>
        {`type Task =
| Initial({ id: int, whoCreated: int })
| InWork({ id: int, whoCreated: int })
| Finished({ 
    id: int,
    whoCreated: int,
    finishDate: Date 
  })`}
      </Code>
    </MySlide>

    <MySlide name="Demo: Reducer typing with ADT">
      <CenteredLayout>
        <GithubFileLink filePath="duReduxEnd.ts">
          Demo: Reducer typing with ADT
        </GithubFileLink>
      </CenteredLayout>
    </MySlide>

    <MySlide name="Try hard!" background="duckdive.jpg">
      <CenteredLayout>
        <H1>Try hard!</H1>
      </CenteredLayout>
    </MySlide>

    <MySlide
      name="Neutral position"
      background="freediver_floating.jpg"
    ></MySlide>

    <MySlide name="Free fall" background="freediver_going_down.jpg"></MySlide>

    <MySlide name="Demo: Reducer typing with inference">
      <GithubFileLink filePath="duInferenceEnd.ts">
        Demo: Reducer typing with inference
      </GithubFileLink>
    </MySlide>

    <MySlide name="infer">
      <Code>{`type AnyFunction = (...args: any) => any`}</Code>
      <Code>{`type AnyFunction = (...args: any) => infer R`}</Code>
      <Code>{`type AnyFunction = (...args: infer) => any`}</Code>
    </MySlide>

    <MySlide name="Relax" background="freediver_relaxed.jpg">
      <CenteredLayout>
        <H1>Relax</H1>
      </CenteredLayout>
    </MySlide>

    <MySlide name="But don't black out" background="freediver_going_up.jpg">
      <H1>But don't black out</H1>
    </MySlide>

    <MySlide name="Questions?">
      <CenteredLayout>
        <Link url="https://github.com/saitonakamura/freediving-into-typescript">
          <H1>https://bit.ly/?</H1>
        </Link>
        <H1>🐱 ❓</H1>
        <H1>
          <Twitter />
        </H1>
        <H1>
          <Github />
        </H1>
      </CenteredLayout>
    </MySlide>
  </MyPresentation>
)

const MyPresentation = styled(Presentation)``

const MySlide = styled(Slide)``

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

const Bottomed = styled.div``

const Twitter = () => (
  <Link url="https://twitter.com/saitonakamura" targetBlank>
    twitter@saitonakamura
  </Link>
)

const Github = () => (
  <Link url="https://github.com/saitonakamura" targetBlank>
    github@saitonakamura
  </Link>
)

const GithubFileLink: React.FC<{ filePath: string }> = ({
  filePath,
  children,
  ...rest
}) => (
  <Link
    url={`https:///github.com/saitonakamura/advanced-typescript-new/master/${filePath}`}
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

// Make sure you render into a full-page container
ReactDOM.render(<Deck />, document.getElementById("root"))
