import React from 'react';
import { ModeHook, useMode } from './mode.hook';
import { Create } from './create/create';
import { Read } from './read/read';

export const App = () => {
  const mode = useMode();

  switch (mode) {
    case ModeHook.Create:
      return <Create />;
    case ModeHook.Read:
      return <Read />;
  }
};
