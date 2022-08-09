import React, {memo} from 'react';
import IdleTimer, {EVENTS, ManagerType, useIdleTimer} from 'react-idle-timer';

interface CrossTabInterface {
  type?: ManagerType;
  channelName?: string;
  fallbackInterval?: number;
  responseTime?: number;
  removeTimeout?: number;
  emitOnAllTabs?: boolean;
}

interface Props {
  children?: React.ReactNode;
  timeout?: number;
  events?: EVENTS[];
  onIdle?: (e: Event) => void;
  onActive?: (e: Event) => void;
  onAction?: (e: Event) => void;
  debounce?: number;
  throttle?: number;
  eventsThrottle?: number;
  element?: Node;
  startOnMount?: boolean;
  startManually?: boolean;
  stopOnIdle?: boolean;
  passive?: boolean;
  capture?: boolean;
  crossTab?: boolean | CrossTabInterface;
}

const IdleTimerComponent: React.FC<Props> = ({children, ...props}) => {
  return <IdleTimer {...props}>{children}</IdleTimer>;
};

export default memo(IdleTimerComponent);

export const useIdleTimerHook = useIdleTimer;
