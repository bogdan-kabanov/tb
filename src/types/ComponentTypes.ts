import type { ReactNode } from 'react';

interface PropsWithChildren {
  children: ReactNode;
}

export interface StyleClassStateType extends ClassArray {
  dinamicClassArray: {
    classArray: {
      Nav: string[],
      Content: string[]
    }
  }
}

export interface ClassArray {
  classArray: {
    [key: string]: string | string[],
    Nav: string[],
    Content: string[]
  }
}

export interface SiteNameProps {
  sitename: string;
}

export interface ParagraphProps extends PropsWithChildren { }

export interface LogotypeProps {
  url: string,
  alt: string
}

export interface InputProps {
  placeholder: string,
  id: string
}

export interface LabelProps extends InputProps {
  htmlFor: string
  labelText: string
}

export interface HeadlineProps extends PropsWithChildren {
  children: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export interface NavProps extends PropsWithChildren { }

export interface ContentProps extends PropsWithChildren { }

export interface ContainerProps extends PropsWithChildren { }