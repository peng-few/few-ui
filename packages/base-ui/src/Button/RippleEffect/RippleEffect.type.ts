export interface RippleAction {
  start(event: React.SyntheticEvent): void;
  stop(): void;
}

export type ContainerRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};
