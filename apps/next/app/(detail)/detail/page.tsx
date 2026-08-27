import { Alert } from '@/components/Alert/Alert';
import { Code } from '@/components/Code/Code';
import { CodeBlock } from '@/components/CodeBlock/CodeBlock';
import { ComponentReference } from '@/components/ComponentReference/ComponentReference';
import { Grid, GridCell } from '@/components/Grid/Grid';
import { Heading } from '@/components/Heading/Heading';
import { OrderedList, OrderedListItem } from '@/components/OrderedList/OrderedList';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { UnorderedList, UnorderedListItem } from '@/components/UnorderedList/UnorderedList';
import { DevNote } from '@/dev-pane/DevNote';
import './detail.css';

const contentSpan = 'all' as const;

const DetailPage = () => {
  return (
    <Grid paddingVertical="2x-large" gapVertical="2x-large">
      <GridCell span={contentSpan}>
        <DevNote
          note={
            <>
              <ComponentReference label="Heading" npmPackage="@nl-design-system-candidate/heading-react" />
              <ComponentReference label="Paragraph" npmPackage="@nl-design-system-candidate/paragraph-react" />
            </>
          }
          title="A per-route theme"
        >
          <Heading level={1}>Detail page: a per-route theme</Heading>
          <Paragraph>
            This entire page: header, footer, and content uses the Rijkshuisstijl Community theme instead of this
            project&apos;s default <Code>start-theme</Code>. The rest of the site keeps its own theme, so this page
            lives in its own route group, <Code>app/(detail)/</Code>, with its own root layout,{' '}
            <Code>app/(detail)/layout.tsx</Code>, that applies the <Code>rhc-theme</Code> class and imports{' '}
            <Code>@rijkshuisstijl-community/design-tokens</Code> instead.
          </Paragraph>
        </DevNote>
      </GridCell>

      <GridCell span={contentSpan}>
        <DevNote
          note={
            <>
              <ComponentReference label="Heading" npmPackage="@nl-design-system-candidate/heading-react" />
              <ComponentReference label="Paragraph" npmPackage="@nl-design-system-candidate/paragraph-react" />
              <ComponentReference label="OrderedList" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="CodeBlock" npmPackage="@nl-design-system-candidate/code-block-react" />
              <ComponentReference label="Code" npmPackage="@nl-design-system-candidate/code-react" />
              <ComponentReference label="Alert" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="UnorderedList" npmPackage="@utrecht/component-library-react" />
            </>
          }
          title="How to change themes"
        >
          <Heading level={2}>How to change themes</Heading>
          <Paragraph>A theme is just a design tokens package plus a class name. To use a different one:</Paragraph>
          <OrderedList>
            <OrderedListItem>
              <Paragraph>Install the design tokens package for the theme you want.</Paragraph>
              <CodeBlock>{'pnpm add @rijkshuisstijl-community/design-tokens'}</CodeBlock>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>Import its CSS once, wherever you apply the theme.</Paragraph>
              <CodeBlock>{"import '@rijkshuisstijl-community/design-tokens/dist/index.css';"}</CodeBlock>
            </OrderedListItem>
            <OrderedListItem>
              <Paragraph>
                Apply the theme&apos;s class name to whichever element should carry it. For a single, global theme,
                that&apos;s the <Code>&lt;html&gt;</Code> element in <Code>app/layout.tsx</Code>.
              </Paragraph>
            </OrderedListItem>
          </OrderedList>
          <Alert type="info">
            <Paragraph>
              Every theme documents its own class name and token package — check the theme&apos;s README instead of
              assuming <Code>rhc-theme</Code> or <Code>start-theme</Code> apply universally.
            </Paragraph>
          </Alert>
          <Alert type="warning">
            <Paragraph>
              Themes created by governments are proprietary and may only be used by them. The NL Design System has
              several themes that you can use as a starting of point for your own theme or to play around with:
            </Paragraph>
            <UnorderedList>
              <UnorderedListItem>
                <Paragraph>For getting started</Paragraph>
                <Code>@nl-design-system-unstable/start-design-tokens</Code>
              </UnorderedListItem>
              <UnorderedListItem>
                <Paragraph>An example theme</Paragraph>
                <Code>@nl-design-system-unstable/voorbeeld-design-tokens</Code>
              </UnorderedListItem>
            </UnorderedList>
          </Alert>
        </DevNote>
      </GridCell>

      <GridCell span={contentSpan}>
        <DevNote
          note={
            <>
              <ComponentReference label="Heading" npmPackage="@nl-design-system-candidate/heading-react" />
              <ComponentReference label="Paragraph" npmPackage="@nl-design-system-candidate/paragraph-react" />
              <ComponentReference label="Code" npmPackage="@nl-design-system-candidate/code-react" />
            </>
          }
          title="Custom CSS variables"
        >
          <Heading level={2}>How to add custom CSS variables</Heading>
          <Paragraph>
            Most components have defined their own custom tokens. So you can easily overwrite them to create your own
            theme. For this page several CSS variables have been overwritten. Have a look in{' '}
            <Code>/app/(detail)/detail/detail.css</Code>.
          </Paragraph>
        </DevNote>
      </GridCell>
    </Grid>
  );
};

export default DetailPage;
