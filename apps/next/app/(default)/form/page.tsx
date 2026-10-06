import { ActionGroup } from '@/components/ActionGroup/ActionGroup';
import { Alert } from '@/components/Alert/Alert';
import { Button } from '@/components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Code } from '@/components/Code/Code';
import { ComponentReference } from '@/components/ComponentReference/ComponentReference';
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
import { DevNote } from '@/dev-pane/DevNote';
import './form.css';

const FormPage = () => {
  return (
    <div className="example-form-page">
      <DevNote
        note={
          <>
            <ComponentReference label="Heading" npmPackage="@nl-design-system-candidate/heading-react" />
            <ComponentReference label="Paragraph" npmPackage="@nl-design-system-candidate/paragraph-react" />
            <ComponentReference label="Code" npmPackage="@nl-design-system-candidate/code-react" />
            <ComponentReference label="Alert" npmPackage="@utrecht/component-library-react" />
          </>
        }
        title="Contact form overview"
      >
        <Heading level={1}>Contact us</Heading>
        <Alert className="example-form-page__intro-alert" type="warning">
          <Paragraph>This is a dummy form for demonstration purposes only. It does not send any data.</Paragraph>
        </Alert>
        <Paragraph>
          This page gathers the Utrecht Design System&apos;s form elements into a single contact form: text inputs, a
          radio group, a select, a text area, a checkbox, and a toggle. Every component here can render as a Server
          Component &mdash; only <Code>Checkbox</Code> needs to run on the client, since it uses React hooks internally
          to support an indeterminate state. The page itself is laid out with a plain flex column and token-based
          spacing, not the <Code>Grid</Code> component used elsewhere on this site.
        </Paragraph>
      </DevNote>

      <form className="example-form-page__fields" method="POST">
        <DevNote
          note={
            <>
              <ComponentReference label="FormField" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="FormLabel" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="Text Input" npmPackage="@utrecht/textbox-css" />
            </>
          }
          title="Name field"
        >
          <FormField>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextInput autoComplete="name" id="name" inputRequired name="name" required />
          </FormField>
        </DevNote>

        <DevNote
          note={
            <>
              <ComponentReference label="FormField" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="FormLabel" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="ErrorMessage" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="Text Input" npmPackage="@utrecht/textbox-css" />
            </>
          }
          title="Email field"
        >
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
        </DevNote>

        <DevNote
          note={<ComponentReference label="Radio Group" npmPackage="@utrecht/radio-group-react" />}
          title="Preferred contact time"
        >
          <RadioGroup
            label="Preferred contact time"
            name="contact-time"
            options={[
              { label: 'Morning', value: 'morning' },
              { defaultChecked: true, label: 'Afternoon', value: 'afternoon' },
              { label: 'Evening', value: 'evening' },
            ]}
          />
        </DevNote>

        <DevNote
          note={
            <>
              <ComponentReference label="FormField" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="FormLabel" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="FormFieldDescription" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="Text Area" npmPackage="@utrecht/textarea-css" />
            </>
          }
          title="Message field"
        >
          <FormField>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormFieldDescription id="message-hint">Optional</FormFieldDescription>
            <TextArea aria-describedby="message-hint" id="message" name="message" rows={4} />
          </FormField>
        </DevNote>

        <DevNote
          note={
            <>
              <ComponentReference label="FormField" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="Checkbox" npmPackage="@utrecht/checkbox-css" />
              <ComponentReference label="FormLabel" npmPackage="@utrecht/component-library-react" />
            </>
          }
          title="Contact consent field"
        >
          <FormField>
            <div className="example-form-page__option">
              <Checkbox id="agree-to-contact" inputRequired name="agree-to-contact" required value="yes" />
              <FormLabel htmlFor="agree-to-contact">I agree to be contacted about this request</FormLabel>
            </div>
          </FormField>
        </DevNote>

        <DevNote
          note={
            <>
              <ComponentReference label="FormField" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="FormLabel" npmPackage="@utrecht/component-library-react" />
              <ComponentReference label="Switch" npmPackage="@utrecht/form-toggle-css" />
            </>
          }
          title="Newsletter field"
        >
          <FormField>
            <FormLabel htmlFor="newsletter">Subscribe to the newsletter</FormLabel>
            <Switch id="newsletter" name="newsletter" value="yes" />
          </FormField>
        </DevNote>

        <DevNote
          note={
            <>
              <ComponentReference label="ActionGroup" npmPackage="@utrecht/action-group-react" />
              <ComponentReference label="Button" npmPackage="@nl-design-system-candidate/button-react" />
            </>
          }
          title="Submit action"
        >
          <ActionGroup>
            <Button type="submit">Send message</Button>
          </ActionGroup>
        </DevNote>
      </form>
    </div>
  );
};

export default FormPage;
