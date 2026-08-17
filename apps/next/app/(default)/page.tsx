import { Alert } from '@/components/Alert/Alert';
import { Code } from '@/components/Code/Code';
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
          <Heading level={1}>Getting started with the NL Design System</Heading>
        </GridCell>
        <GridCell span={contentSpan}>
          <Heading level={2}>Purpose</Heading>
          <Paragraph>
            The <Link href="https://nldesignsystem.nl">NL Design System</Link> grows bottom-up: developers build
            components, share them with the community, and together help them mature into Candidate and, eventually,
            Hall of Fame status. Using a component is often the first step toward contributing one.
          </Paragraph>
          <Paragraph>
            This project shows how you can discover and use components from the NL Design System in a Next.js
            application and doubles as a starting point if you want to build a component of your own.
          </Paragraph>
          <Paragraph>
            This page deliberately combines components from multiple implementations:{' '}
            <Code>@nl-design-system-candidate</Code>, <Code>@utrecht/component-library-react</Code>, and{' '}
            <Code>@amsterdam/design-system-react</Code>.
          </Paragraph>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Which component should you use?</Heading>
          <Paragraph>
            The NL Design System groups every component through the{' '}
            <Link href="https://nldesignsystem.nl/handboek/estafettemodel/">estafettemodel</Link> (relay model). It
            ranges from a documented need with no implementation yet, to a production-proven implementation used across
            organisations:
          </Paragraph>
          <OrderedList>
            <OrderedListItem>
              <Paragraph>
                <strong>Help wanted</strong> a documented need for a specific implementation. It has a clear description
                and use-case. Ready to be developed into a component for each organisation that needs it
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                <strong>Community</strong> built by the community according to NL Design System guidelines and usable
                with confidence. It can contain community specific quirks.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                <strong>Candidate</strong> expected to reach Hall of Fame, but needs some hardening by gathering
                documentation and feedback, so it can still change.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                <strong>Hall of Fame</strong> used in production by at least two organizations, audited for
                accessibility, and semantically versioned with a changelog.
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
              Rule of thumb: if a mature (Hall of Fame or Candidate) component already exists for your use case, reach
              for that first. If it doesn't exist yet, or it doesn't fit your needs, create your own — share it with the
              community, and help it grow toward Candidate.
            </Paragraph>
          </Alert>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Finding components</Heading>
          <Paragraph>Before building a component yourself, check whether it already exists:</Paragraph>
          <OrderedList>
            <OrderedListItem>
              <Paragraph>
                Search <Link href="https://nldesignsystem.nl/componenten/">nldesignsystem.nl/componenten/</Link>, the
                central catalog of components across all NL Design System implementations.
              </Paragraph>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                If you can't find what you need there, browse the individual implementation repositories on GitHub and
                their Storybooks — for example{' '}
                <Link href="https://github.com/nl-design-system/rijkshuisstijl-community/tree/main/packages/components-react">
                  Rijkshuisstijl on GitHub
                </Link>{' '}
                and its <Link href="https://rijkshuisstijl-community.vercel.app/">Storybook</Link>, or{' '}
                <Link href="https://github.com/nl-design-system/utrecht/blob/main/packages/component-library-react/">
                  Utrecht on GitHub
                </Link>{' '}
                and its <Link href="https://nl-design-system.github.io/utrecht/storybook/">Storybook</Link>.
              </Paragraph>
            </OrderedListItem>
          </OrderedList>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Installing your first component</Heading>
          <Paragraph>Everything you need to start using the NL Design System in a React application:</Paragraph>
          <OrderedList>
            <OrderedListItem>
              <Paragraph>
                Choose an implementation. The NL Design System isn't a single library, so pick the one (or combination)
                that fits your project, such as <Code>@nl-design-system-candidate</Code>,{' '}
                <Code>@utrecht/component-library-react</Code>, or <Code>@amsterdam/design-system-react</Code>.
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
                <Code>@nl-design-system-unstable/start-design-tokens</Code> and applies the <Code>start-theme</Code>{' '}
                class in <Code>app/layout.tsx</Code>.
              </Paragraph>
              <CodeBlock>
                {"import '@nl-design-system-unstable/start-design-tokens/dist/variables.css';\n\n" +
                  '<html lang="en" className="start-theme">'}
              </CodeBlock>
              <Alert type="warning">
                <Paragraph>
                  Your chosen component might be using design tokens that have not been defined in your theme file. This
                  means you need to assign these yourself. Generally it's best to do this in a single css file to have
                  all the custom variables in a single location.
                </Paragraph>
              </Alert>
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
              <Paragraph>Repeat for every component you need.</Paragraph>
            </OrderedListItem>
          </OrderedList>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>How to use this project</Heading>
          <Paragraph>
            Each component used on this page follows the steps above and is wrapped in its own file under{' '}
            <Code>components/</Code>, so you can see the install and import steps applied for real. Open a component in
            that folder to see the pattern.
          </Paragraph>
        </GridCell>

        <GridCell span={contentSpan}>
          <Heading level={2}>Next steps</Heading>
          <Paragraph>Want to continue? Here's what you can have a look at next:</Paragraph>
          <LinkList>
            <LinkListLink href="/detail">The detail page with a different theme</LinkListLink>
            <LinkListLink href="https://nldesignsystem.nl">
              Explore nldesignsystem.nl — discover the broader ecosystem and more components
            </LinkListLink>
            <LinkListLink href="https://github.com/nl-design-system">
              Head to github.com/nl-design-system — build a component, open an issue, or pick up a Help wanted item
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
