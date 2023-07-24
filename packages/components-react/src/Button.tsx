import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export const Button = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<any>, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={className} type={'button'} {...restProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
