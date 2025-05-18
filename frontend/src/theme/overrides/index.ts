import * as Buttons from './buttons';
import * as Display from './display';
import * as Feedback from './feedback';
import * as Form from './form';
import * as Icons from './icons';
import * as Inputs from './inputs';
import * as Navigation from './navigation';
import * as Surfaces from './surfaces';
import * as Other from './other';
import type { Theme } from '@mui/material';

const componentGroups = [
  Buttons,
  Display,
  Feedback,
  Form,
  Icons,
  Inputs,
  Navigation,
  Surfaces,
  Other,
];

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign({},
    ...componentGroups.flatMap((group) =>
      Object.values(group).map((fn) => fn(theme))
    )
  );
}