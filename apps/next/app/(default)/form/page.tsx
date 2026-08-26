import { ActionGroup } from '@/components/ActionGroup/ActionGroup';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Code } from '@/components/Code/Code';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { FormField } from '@/components/FormField/FormField';
import { FormFieldDescription } from '@/components/FormFieldDescription/FormFieldDescription';
import { FormLabel } from '@/components/FormLabel/FormLabel';
import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import { Switch } from '@/components/Switch/Switch';
import { TextArea } from '@/components/TextArea/TextArea';
import { TextInput } from '@/components/TextInput/TextInput';
import './form.css';

const FormPage = () => {
  return (
    <div className="example-form-page">
      <Heading level={1}>Contact us</Heading>
      <Paragraph>
        This page gathers the Utrecht Design System&apos;s form elements into a single contact form: text inputs, a
        radio group, a select, a text area, a checkbox, and a toggle. Every component here can render as a Server
        Component &mdash; only <Code>Checkbox</Code> needs to run on the client, since it uses React hooks internally to
        support an indeterminate state. The page itself is laid out with a plain flex column and token-based spacing,
        not the <Code>Grid</Code> component used elsewhere on this site.
      </Paragraph>

      <form className="example-form-page__FormFields" method="POST">
        <FormField>
          <FormLabel htmlFor="name">Name</FormLabel>
          <TextInput autoComplete="name" id="name" inputRequired name="name" required />
        </FormField>

        <FormField invalid>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <ErrorMessage id="email-error">Enter a valid email address, such as name@example.com.</ErrorMessage>
          <TextInput
            aria-describedby="email-error"
            defaultValue="not-an-email"
            id="email"
            inputRequired
            invalid
            name="email"
            required
            type="email"
          />
        </FormField>

        <RadioGroup
          label="Preferred contact time"
          name="contact-time"
          options={[
            { label: 'Morning', value: 'morning' },
            { defaultChecked: true, label: 'Afternoon', value: 'afternoon' },
            { label: 'Evening', value: 'evening' },
          ]}
        />

        <FormField>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormFieldDescription id="message-hint">Optional</FormFieldDescription>
          <TextArea aria-describedby="message-hint" id="message" name="message" rows={4} />
        </FormField>

        <FormField>
          <div className="example-form-page__option">
            <Checkbox id="agree-to-contact" inputRequired name="agree-to-contact" required value="yes" />
            <FormLabel htmlFor="agree-to-contact">I agree to be contacted about this request</FormLabel>
          </div>
        </FormField>

        <FormField>
          <FormLabel htmlFor="newsletter">Subscribe to the newsletter</FormLabel>
          <Switch id="newsletter" name="newsletter" value="yes" />
        </FormField>
        <ActionGroup>
          <Button type="submit">Send message</Button>
        </ActionGroup>
      </form>
    </div>
  );
};

export default FormPage;
