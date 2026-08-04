import { Alert } from '@/components/Alert/Alert';
import { CodeBlock } from '@/components/CodeBlock/CodeBlock';
import { Grid, GridCell } from '@/components/Grid/Grid';
import { Heading } from '@/components/Heading/Heading';
import { Link } from '@/components/Link/Link';
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
          This entire page — header, footer, and content — uses the Rijkshuisstijl Community theme instead of this
          project&apos;s default <code>start-theme</code>. The rest of the site keeps its own theme, so this page lives
          in its own route group, <code>app/(detail)/</code>, with its own root layout,{' '}
          <code>app/(detail)/layout.tsx</code>, that applies the <code>rhc-theme</code> class and imports{' '}
          <code>@rijkshuisstijl-community/design-tokens</code> instead. Next.js renders each root layout fully on the
          server, so the theme is fixed the moment a route resolves — no client-side JavaScript decides it. Nothing
          about <code>PageHeader</code> or <code>PageFooter</code> had to change either — every component only reads CSS
          custom properties, so swapping the class swaps the look.
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
              that&apos;s the <code>&lt;html&gt;</code> element in <code>app/layout.tsx</code>. To give one part of the
              site its own theme instead, like this page does, put its routes in their own{' '}
              <Link href="https://nextjs.org/docs/app/api-reference/file-conventions/route-groups">route group</Link> —
              a folder name in parentheses — and give that group its own root layout with the class and token import
              applied:
            </Paragraph>
            <CodeBlock>
              {'app/\n' +
                '  layout.tsx        # <html className="start-theme">\n' +
                '  page.tsx          # unaffected routes, e.g. "/"\n' +
                '  (detail)/\n' +
                '    layout.tsx      # <html className="rhc-theme">\n' +
                '    detail/\n' +
                '      page.tsx      # "/detail"'}
            </CodeBlock>
            <Paragraph>
              The route group itself doesn&apos;t appear in the URL, so <code>app/(detail)/detail/page.tsx</code> still
              serves <code>/detail</code>. Because each root layout renders its own <code>&lt;html&gt;</code>/
              <code>&lt;body&gt;</code>, Next.js treats them as separate roots and a full page load happens when
              navigating between them — the theme is decided once, server-side, per request.
            </Paragraph>
          </OrderedListItem>
        </OrderedList>
        <Alert type="info">
          <Paragraph>
            Every theme documents its own class name and token package — check the theme&apos;s README instead of
            assuming <code>rhc-theme</code> or <code>start-theme</code> apply universally.
          </Paragraph>
        </Alert>
      </GridCell>

      <GridCell span={contentSpan}>
        <Heading level={2}>How to add custom CSS variables</Heading>
        <Paragraph>
          Design tokens are ordinary CSS custom properties, so any single one can be overridden without swapping the
          whole theme. This is how <code>components/PageHeader/page-header.css</code> gives the page header its colors
          in this project, and the same pattern works for one-off tweaks anywhere:
        </Paragraph>
        <OrderedList>
          <OrderedListItem>
            <Paragraph>
              Add a CSS file and target a class with the custom properties you want to change. Reusing another token
              from the same theme keeps the override consistent with the rest of the design.
            </Paragraph>
            <CodeBlock>
              {'.example-detail-alert-override {\n' +
                '  --utrecht-alert-icon-info-color: var(--rhc-color-primary-500);\n' +
                '  --utrecht-alert-info-background-color: var(--rhc-color-primary-50);\n' +
                '  --utrecht-alert-info-border-color: var(--rhc-color-primary-500);\n' +
                '}'}
            </CodeBlock>
          </OrderedListItem>
          <OrderedListItem>
            <Paragraph>Import that CSS file and apply the class to whatever should be affected.</Paragraph>
            <CodeBlock>
              {"import './detail.css';\n\n" +
                '<div className="example-detail-alert-override">\n  <Alert type="info">...</Alert>\n</div>'}
            </CodeBlock>
          </OrderedListItem>
        </OrderedList>
        <Paragraph>
          The two alerts below are both <code>type=&quot;info&quot;</code> from the same component. The first uses the
          theme&apos;s default colors, the second has the override above applied:
        </Paragraph>
        <Alert type="info">
          <Paragraph>Default styling from the rhc-theme design tokens.</Paragraph>
        </Alert>
        <div className="example-detail-alert-override">
          <Alert type="info">
            <Paragraph>
              Overridden with <code>--rhc-color-primary-500</code> and <code>--rhc-color-primary-50</code> via the{' '}
              <code>example-detail-alert-override</code> class.
            </Paragraph>
          </Alert>
        </div>
      </GridCell>
    </Grid>
  );
};

export default DetailPage;
