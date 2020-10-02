import { Serializable } from "local/@types/json";

export type HomeProps = {
  body: string;
  state: Serializable;
  title: string;
};

type HomeState = HomeProps & {
  appState: string;
};

export const useHomeState = (props: HomeProps): HomeState => {
  const appState = JSON.stringify(props.state);
  return {
    ...props,
    appState,
  };
};
