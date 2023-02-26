import React from 'react';
import './button.css';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
} & JSX.IntrinsicElements['button'];

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  className,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <div>
      <button
        type="button"
        className={`rounded-md bg-red-500 py-3 px-5${
          (size === 'medium' && 'py-6 px-8 text-xl') ||
          (size === 'large' && 'py-8 px-10 text-3xl')
        } text-white ${className}`}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};
