export interface EventData {
  eventName: string;
  eventCount: number;
  eventSum?: string;
  segments?: {};
}

declare module 'countly-sdk-react-native-bridge/CountlyConfig' {
  class CountlyConfig {
    constructor(serverURL: string, appKey: string);
    enableCrashReporting(): this;
  }

  export default CountlyConfig;
}