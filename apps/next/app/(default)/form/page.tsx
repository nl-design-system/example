import { ActionGroup } from '@/components/ActionGroup/ActionGroup';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Code } from '@/components/Code/Code';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { Field } from '@/components/Field/Field';
import { FieldSet, FieldSetLegend } from '@/components/FieldSet/FieldSet';
import { Heading } from '@/components/Heading/Heading';
import { Hint } from '@/components/Hint/Hint';
import { Label } from '@/components/Label/Label';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { RadioButton } from '@/components/RadioButton/RadioButton';
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

      <form className="example-form-page__fields" method="POST">
        <Field>
          <Label htmlFor="name">Name</Label>
          <TextInput autoComplete="name" id="name" inputRequired name="name" required />
        </Field>

        <Field invalid>
          <Label htmlFor="email">Email address</Label>
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
        </Field>

        <FieldSet>
          <div className="example-formpage__radio-group">
            <FieldSetLegend>Preferred contact time</FieldSetLegend>
            <div className="example-form-page__option">
              <RadioButton id="contact-time-morning" name="contact-time" value="morning" />
              <Label htmlFor="contact-time-morning">Morning</Label>
            </div>
            <div className="example-form-page__option">
              <RadioButton defaultChecked id="contact-time-afternoon" name="contact-time" value="afternoon" />
              <Label htmlFor="contact-time-afternoon">Afternoon</Label>
            </div>
            <div className="example-form-page__option">
              <RadioButton id="contact-time-evening" name="contact-time" value="evening" />
              <Label htmlFor="contact-time-evening">Evening</Label>
            </div>
          </div>
        </FieldSet>

        <Field>
          <Label htmlFor="message">Message</Label>
          <Hint id="message-hint">Optional</Hint>
          <TextArea aria-describedby="message-hint" id="message" name="message" rows={4} />
        </Field>

        <Field>
          <div className="example-form-page__option">
            <Checkbox id="agree-to-contact" inputRequired name="agree-to-contact" required value="yes" />
            <Label htmlFor="agree-to-contact">I agree to be contacted about this request</Label>
          </div>
        </Field>

        <Field>
          <Label htmlFor="newsletter">Subscribe to the newsletter</Label>
          <Switch id="newsletter" name="newsletter" value="yes" />
        </Field>
        <ActionGroup>
          <Button type="submit">Send message</Button>
        </ActionGroup>
      </form>
    </div>
  );
};

export default FormPage;
