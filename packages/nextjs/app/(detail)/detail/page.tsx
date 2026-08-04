import { Alert } from '@/components/Alert/Alert';
import { CodeBlock } from '@/components/CodeBlock/CodeBlock';
import { Grid, GridCell } from '@/components/Grid/Grid';
import { Heading } from '@/components/Heading/Heading';
import { OrderedList, OrderedListItem } from '@/components/OrderedList/OrderedList';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import './detail.css';

const contentSpan = 'all' as const;

const DetailPage = () => {
  return (
    <Grid paddingVertical="2x-large" gapVertical="2x-large">
      <GridCell span={contentSpan}>
        <Heading level={1}>Detail page: a per-route theme</Heading>
        <Paragraph>
          This entire page: header, footer, and content uses the Rijkshuisstijl Community theme instead of this
          project&apos;s default <code>start-theme</code>. The rest of the site keeps its own theme, so this page lives
          in its own route group, <code>app/(detail)/</code>, with its own root layout,{' '}
          <code>app/(detail)/layout.tsx</code>, that applies the <code>rhc-theme</code> class and imports{' '}
          <code>@rijkshuisstijl-community/design-tokens</code> instead.
        </Paragraph>
      </GridCell>

      <GridCell span={contentSpan}>
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
              that&apos;s the <code>&lt;html&gt;</code> element in <code>app/layout.tsx</code>.
            </Paragraph>
          </OrderedListItem>
        </OrderedList>
        <Alert type="info">
          <Paragraph>
            Every theme documents its own class name and token package — check the theme&apos;s README instead of
            assuming <code>rhc-theme</code> or <code>start-theme</code> apply universally.
          </Paragraph>
        </Alert>
        <Alert type="warning">
          <Paragraph>
            Themes created by governments are proprietary and may only be used by them. The NL-Design
          </Paragraph>
        </Alert>
      </GridCell>

      <GridCell span={contentSpan}>
        <Heading level={2}>How to add custom CSS variables</Heading>
        <Paragraph>
          Most components have defined their own custom tokens. So you can easily overwrite them to create your own
          theme. For this page several CSS variables have been overwritten. Have a look in{' '}
          <code>/app/(detail)/detail/detail.css</code>.
        </Paragraph>
      </GridCell>
    </Grid>
  );
};

export default DetailPage;
