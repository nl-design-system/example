import '@utrecht/page-footer-css/dist/index.css';
import { PageFooter as UtrechtPageFooter } from '@utrecht/page-footer-react';
import { Grid, GridCell } from '../Grid/Grid';
import { LinkList, LinkListLink } from '../LinkList/LinkList';
import { Logo } from '../Logo';

const PageFooter = () => {
  const logoSpan = { medium: 2, narrow: 4, wide: 2 } as const;
  const logoStart = { medium: 1, narrow: 1, wide: 1 } as const;
  const footerLinksSpan = { medium: 4, narrow: 4, wide: 4 } as const;
  const footerLinksStart = { medium: 3, narrow: 1, wide: 5 } as const;

  return (
    <UtrechtPageFooter>
      <Grid paddingVertical="large" gapVertical="large">
        <GridCell span={logoSpan} start={logoStart}>
          <Logo />
        </GridCell>

        <GridCell span={footerLinksSpan} start={footerLinksStart}>
          <LinkList>
            <LinkListLink href="https://nldesignsystem.nl/community/sluit-je-aan/">Meedoen aan community</LinkListLink>
            <LinkListLink href="https://nldesignsystem.nl/handboek/developer/conventies/">Conventies</LinkListLink>
            <LinkListLink href="https://nldesignsystem.nl/richtlijnen/">Richtlijnen</LinkListLink>
            <LinkListLink href="https://nldesignsystem.nl/handboek/developer/thema-maken/">
              Zelf thema maken met design tokens
            </LinkListLink>
            <LinkListLink href="https://nldesignsystem.nl/handboek/developer/infrastructuur/">
              Infrastructuur
            </LinkListLink>
          </LinkList>
        </GridCell>
      </Grid>
    </UtrechtPageFooter>
  );
};

export { PageFooter };
