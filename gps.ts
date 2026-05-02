// types/tracking.types.ts

export interface Coordinates {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy?: number;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
  timestamp: number;
}

export interface PhotoMetadata {
  timestamp: number;
  location?: Coordinates;
  deviceInfo?: {
    cameraType: 'front' | 'rear';
    resolution: { width: number; height: number };
  };
}

export interface CapturedPhoto {
  id: string;
  base64: string;
  uri?: string;
  metadata: PhotoMetadata;
  thumbnail?: string;
}

export interface TrackingSession {
  id: string;
  startTime: number;
  endTime?: number;
  waypoints: Coordinates[];
  photos: CapturedPhoto[];
  status: 'active' | 'paused' | 'completed' | 'error';
}

export type CameraPermission = 'granted' | 'denied' | 'prompt' | 'unsupported';
export type GPSTrackingMode = 'highAccuracy' | 'balanced' | 'lowPower';