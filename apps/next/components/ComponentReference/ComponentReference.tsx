import { FormFieldDescription } from '@/components/FormFieldDescription/FormFieldDescription';
import { Link } from '@/components/Link/Link';

interface ComponentReferenceProps {
  label: string;
  npmPackage: string;
}

export const ComponentReference = ({ label, npmPackage }: ComponentReferenceProps) => (
  <FormFieldDescription className="example-form-page__component-reference">
    Rendered with the{' '}
    <Link href={`https://www.npmjs.com/package/${npmPackage}`} rel="noopener noreferrer" target="_blank">
      {label}
    </Link>{' '}
    component.
  </FormFieldDescription>
);
