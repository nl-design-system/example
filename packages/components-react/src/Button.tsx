import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import Sparkle from 'react-sparkle';

export const Button = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<any>, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={className} type={'button'} {...restProps} style={{ position: 'relative' }}>
        {children}
        <Sparkle
          overflowPx={100}
          fadeOutSpeed={100}
          flicker={true}
          flickerSpeed={'slowest'}
          color={['#FFF', '#8a0000', '#000000', '#0db5b8', '#f71e2c']}
        />
      </button>
    );
  },
);

Button.displayName = 'Button';
