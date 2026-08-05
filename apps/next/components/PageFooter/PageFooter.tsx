import '@utrecht/page-footer-css/dist/index.css';
import { PageFooter as UtrechtPageFooter } from '@utrecht/page-footer-react';
import { Grid, GridCell } from '../Grid/Grid';
import { LinkList, LinkListLink } from '../LinkList/LinkList';
import { Logo } from '../Logo';

const PageFooter = () => {
  return (
    <UtrechtPageFooter>
      <Grid paddingVertical="large" gapVertical="large">
        <GridCell span="all">
          <Logo />
        </GridCell>

        <GridCell span="all">
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
