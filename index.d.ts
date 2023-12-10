export interface EventData {
  eventName: string;
  eventCount: number;
  eventSum?: string;
  segments?: {};
}

declare module 'countly-sdk-react-native-bridge' {
  import CountlyConfig from 'countly-sdk-react-native-bridge/CountlyConfig';
  class Countly {
    static initWithConfig(countlyConfig: CountlyConfig): Promise<void>;
    static start(): void;
    static setUserData(userData: any): string;
    static sendEvent({eventName, eventCount, eventSum}: EventData): void;
    static recordView(recordView: string, segments: Map<any, any>): void;
    static isInitialized(): Promise<boolean>;
    static isInitialized(): Promise<boolean>;
    static userData: {
      setProperty(keyName: any, keyValue: any): any;
    };
    static setLoggingEnabled(enabled: boolean)
    static startEvent(name: string)
    static endEvent(event: EventData)
    static cancelEvent(name: string)
  }

  export default Countly;
}