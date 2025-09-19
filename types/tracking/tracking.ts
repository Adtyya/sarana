// types/tracking.ts
export interface DHLTimestamp {
  TimestampCode: string;
  TimestampDescription: string;
  TimestampDateTime: string;
  LocationCodeUN: string;
  LocationName: string;
}

export interface DHLTrackingData {
  ShipmentTracking: {
    Shipment: {
      HousebillNumber: string;
      Origin: { LocationName: string; CountryCode: string };
      Destination: { LocationName: string; CountryCode: string };
      ProductType: string;
      TotalPackages: string;
      TotalWeight: { "*body": string; "@uom": string };
      LastEvent: {
        TimestampDateTime: string;
        Location: string;
        Description: string;
      };
      Timestamps: { Timestamp: DHLTimestamp[] };
    };
  };
}

export interface TrackingResponse {
  shipment_id: string;
  tracking_number: string;
  status?: string;
  courier: "DHL" | string;
  tracking_data: DHLTrackingData;
}
