export const useNotifier = () => {
  const notify = (message: string): void => {
    window.alert(message);
  };

  return { notify };
};
