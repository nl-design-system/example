import { Alert } from '@/components/Alert/Alert';
import { CodeBlock } from '@/components/CodeBlock/CodeBlock';
import { Grid, GridCell } from '@/components/Grid/Grid';
import { Heading } from '@/components/Heading/Heading';
import { Link } from '@/components/Link/Link';
import { LinkList, LinkListLink } from '@/components/LinkList/LinkList';
import { OrderedList, OrderedListItem } from '@/components/OrderedList/OrderedList';
import { Paragraph } from '@/components/Paragraph/Paragraph';

const contentSpan = 'all' as const;

const Home = () => {
  return (
    <div>
      <Grid paddingVertical="2x-large" gapVertical="2x-large">
        <GridCell span={contentSpan}>
          <Heading level={1}>NL Design System in Next.js</Heading>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Purpose</Heading>
          <Paragraph>
            This project shows how you can playfully discover and use components from the{' '}
            <Link href="https://nldesignsystem.nl">NL Design System</Link> in a Next.js application.
          </Paragraph>
          <Paragraph>
            This page deliberately combines components from multiple implementations:{' '}
            <code>@nl-design-system-candidate</code>, <code>@utrecht/component-library-react</code>, and{' '}
            <code>@amsterdam/design-system-react</code>.
          </Paragraph>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Which component maturity should you use?</Heading>
          <Paragraph>
            The NL Design System groups every component by maturity through the{' '}
            <Link href="https://nldesignsystem.nl/handboek/estafettemodel/">estafettemodel</Link> (relay model). It
            ranges from a production-proven implementation to a concept with no clear implementation yet:
          </Paragraph>
          <OrderedList>
            <OrderedListItem>
              <Paragraph>
                <strong>Hall of Fame</strong> used in production by at least two organizations, audited for
                accessibility, and semantically versioned with a changelog. The safest choice.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                <strong>Candidate</strong> expected to reach Hall of Fame, but still gathering documentation and
                feedback, so it can still change. This is what <code>@nl-design-system-candidate</code> offers.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                <strong>Community</strong> built by the community according to NL Design System guidelines and usable
                with confidence, but without the stability guarantees of Candidate or Hall of Fame.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                <strong>Help wanted</strong> a documented need without an implementation yet, and a good opportunity to
                contribute one.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                <strong>Discouraged</strong> flagged by user research or accessibility guidelines as something to avoid.
              </Paragraph>
            </OrderedListItem>
          </OrderedList>
          <Alert type="info">
            <Paragraph>
              Rule of thumb: always reach for the most mature (Hall of Fame) version of a component first. If it doesn't
              fit your use case, check Candidate implementations, and only then look around the Community components —
              just know these can have organisasion specific quirks and may still change.
            </Paragraph>
          </Alert>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Getting started</Heading>
          <Paragraph>Everything you need to start using the NL Design System in a React application:</Paragraph>
          <OrderedList>
            <OrderedListItem>
              <Paragraph>
                Choose an implementation. The NL Design System isn't a single library, so pick the one (or combination)
                that fits your project, such as <code>@nl-design-system-candidate</code>,{' '}
                <code>@utrecht/component-library-react</code>, or <code>@amsterdam/design-system-react</code>.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>Install the React component and its CSS package.</Paragraph>
              <CodeBlock>
                {'pnpm add @nl-design-system-candidate/heading-react @nl-design-system-candidate/heading-css'}
              </CodeBlock>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                Import the component's CSS once, wherever you set up your application or with your component
                implementation.
              </Paragraph>
              <CodeBlock>{"import '@nl-design-system-candidate/heading-css/heading.css';"}</CodeBlock>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                Load a set of design tokens and apply the matching theme class to your root element. This project loads{' '}
                <code>@nl-design-system-unstable/start-design-tokens</code> and applies the <code>start-theme</code>{' '}
                class in <code>app/layout.tsx</code>.
              </Paragraph>
              <CodeBlock>
                {"import '@nl-design-system-unstable/start-design-tokens/dist/variables.css';\n\n" +
                  '<html lang="en" className="start-theme">'}
              </CodeBlock>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>Import and render the component.</Paragraph>
              <CodeBlock>
                {"import { Heading } from '@nl-design-system-candidate/heading-react';\n\n" +
                  'const Example = () => <Heading level={1}>Hello world</Heading>;'}
              </CodeBlock>
              <Paragraph>
                The React components can also be imported with CSS included but with the caveat that it can only be
                client side rendered:
              </Paragraph>
              <CodeBlock>{"import { Link } from '@nl-design-system-candidate/link-react/css';"}</CodeBlock>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                Repeat for every component you need, and browse{' '}
                <Link href="https://nldesignsystem.nl/componenten/">nldesignsystem.nl/componenten/</Link> to discover
                which components exist and in which implementations.
              </Paragraph>
            </OrderedListItem>
          </OrderedList>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>How to use this project</Heading>
          <Paragraph>
            Each component used on this page follows the steps above and is wrapped in its own file under{' '}
            <code>components/</code>, so you can see the install and import steps applied for real. Open a component in
            that folder to see the pattern.
          </Paragraph>
          <Alert type="info">
            <Paragraph>
              Tip: start at <Link href="https://nldesignsystem.nl/componenten/">nldesignsystem.nl/componenten/</Link> to
              discover which components are available and in which implementations, before building something yourself.
            </Paragraph>
          </Alert>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Next steps</Heading>
          <Paragraph>Want to continue? Here are two logical next steps:</Paragraph>
          <LinkList>
            <LinkListLink href="https://nldesignsystem.nl">
              Explore nldesignsystem.nl — discover the broader ecosystem and more components
            </LinkListLink>

            <LinkListLink href="https://nl-design-system.github.io/example/">
              View the Storybook for this project — a starting point for implementing your own design system
            </LinkListLink>
          </LinkList>
        </GridCell>
      </Grid>
    </div>
  );
};

export default Home;
