import React from 'react';

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export enum AnimationState {
  HIDDEN = 'hidden',
  VISIBLE = 'visible'
}