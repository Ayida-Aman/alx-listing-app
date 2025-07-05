// interfaces/index.ts

// Props for a generic card component (e.g. for listings, profiles, etc.)
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

// Props for a reusable button component
export interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  icon?: React.ReactNode;
}