export enum ModeHook {
  Create = 'CREATE_MODE',
  Read = 'READ_MODE'
}

export const useMode = (): ModeHook => {
  const [, path] = window.location.pathname.split('/');
  const hasPath = !!path;

  switch (hasPath) {
    case true:
      return ModeHook.Read;
    case false:
      return ModeHook.Create;
    default:
      throw new Error('undefined mode')
  }
};
