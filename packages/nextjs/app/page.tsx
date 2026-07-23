import { Button } from '@/components/Button/Button';
import { Heading } from '@/components/Heading/Heading';
import { Link } from '@/components/Link/Link';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { SkipLink } from '@/components/SkipLink/SkipLink';

const Home = () => {
  return (
    <div>
      <SkipLink href="#main">Naar de hoofdinhoud</SkipLink>
      <Heading level={1}>Voorbeeldpagina</Heading>
      <Paragraph>Lets get started!</Paragraph>
      <Button purpose="primary">Click me</Button>
      <Paragraph>
        <Link href="https://nldesignsystem.nl">NL Design System</Link>
      </Paragraph>
    </div>
  );
};

export default Home;
