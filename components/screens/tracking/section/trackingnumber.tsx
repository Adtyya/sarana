"use client";

import api from "@/lib/axios";
import { useState } from "react";
import { Button } from "@/components/button/button";
import Textarea from "@/components/input/textarea";
import { Paragraph } from "@/components/text/paragraph";
import Container from "@/components/wrapper/container";
import { Search } from "lucide-react";
import { toast } from "sonner";
import type { TrackingResponse } from "@/types/tracking/tracking";
import { AxiosError } from "axios";

export default function TrackingNumber() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingResponse[]>([]);

  const getTrackingPosition = async () => {
    const list = trackingNumber
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (list.length === 0) {
      return toast.error("Tracking number cannot be empty!");
    }

    try {
      setLoading(true);

      const res = await api.post<TrackingResponse[]>("/shipment/tracking", {
        list,
      });

      if (res.data && res.data.length > 0) {
        setTrackingData(res.data);
        toast.success("Tracking data loaded successfully");
      } else {
        toast.error("Shipment not found!");
      }
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      console.error(err);
      setTrackingData([]);

      toast.error(
        err.response?.data?.message || "Failed to fetch tracking data 🚨"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Form input */}
          <form>
            <Paragraph>
              Enter max 10 tracking numbers and get tracking results
            </Paragraph>
            <br />
            <Textarea
              label="Input your tracking number"
              id="trackingnumber"
              name="trackingnumber"
              rows={5}
              className="mb-3.5"
              onChange={(event) => setTrackingNumber(event.target.value)}
            />
            <Button
              iconPosition="right"
              icon={<Search size={18} />}
              type="button"
              disabled={loading}
              onClick={getTrackingPosition}
            >
              {loading ? "Loading..." : "Search"}
            </Button>
          </form>

          {/* Result */}
          <div className="space-y-4">
            {trackingData.map((item) => (
              <div
                key={item?.shipment_id}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                {/* Case: data courier tidak lengkap */}
                {item?.status === "Data courier tidak lengkap" ? (
                  <p className="text-red-500 font-medium">
                    {item?.shipment_id} — {item?.status}
                  </p>
                ) : (
                  <>
                    {/* Header */}
                    <Paragraph size="lg" className="font-semibold mb-1.5">
                      {item?.courier} - {item?.tracking_number}
                    </Paragraph>

                    {/* Origin → Destination */}
                    <Paragraph>
                      From{" "}
                      {item?.tracking_data?.ShipmentTracking?.Shipment?.Origin
                        ?.LocationName || "-"}{" "}
                      →{" "}
                      {item?.tracking_data?.ShipmentTracking?.Shipment
                        ?.Destination?.LocationName || "-"}
                    </Paragraph>

                    {/* Last Event */}
                    {item?.tracking_data?.ShipmentTracking?.Shipment
                      ?.LastEvent && (
                      <Paragraph className="mt-1 text-green-600 font-medium">
                        Last Event:{" "}
                        {
                          item?.tracking_data?.ShipmentTracking?.Shipment
                            ?.LastEvent?.Description
                        }
                      </Paragraph>
                    )}

                    {/* Timeline */}
                    <ul className="mt-3 space-y-1 text-sm text-gray-700">
                      {item?.tracking_data?.ShipmentTracking?.Shipment
                        ?.Timestamps?.Timestamp?.length > 0 ? (
                        item.tracking_data.ShipmentTracking.Shipment.Timestamps.Timestamp.map(
                          (ts, idx) => (
                            <li
                              key={idx}
                              className="border-l-2 border-gray-300 pl-2"
                            >
                              <strong>{ts?.TimestampDescription}</strong> —{" "}
                              {ts?.LocationName || "-"} (
                              {new Date(ts?.TimestampDateTime).toLocaleString()}
                              )
                            </li>
                          )
                        )
                      ) : (
                        <li className="text-gray-400 italic">
                          No timeline available
                        </li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
