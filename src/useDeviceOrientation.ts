import { useState, useEffect } from "react";
import { Accelerometer, AccelerometerMeasurement } from "expo-sensors";

type AccelerometerData = {
  x: number;
  y: number;
  z: number;
};

interface UseDeviceOrientationProps {
  accelerometerUpdateInterval?: number; // Optional prop
}

export default function useDeviceOrientation({
  accelerometerUpdateInterval,
}: UseDeviceOrientationProps = {}): number {
  const [{ x, y, z }, setData] = useState<AccelerometerData>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState<any>(null);
  const [orientation, setOrientation] = useState<number>(0);

  // Set default interval if not provided
  const updateInterval = accelerometerUpdateInterval ?? 1000;

  const _rate = () => Accelerometer.setUpdateInterval(updateInterval);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((data: AccelerometerMeasurement) => {
        setData(data);
        getOrientation(data);
      })
    );
  };

  const _unsubscribe = () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
  };

  useEffect(() => {
    const checkAccelerometerAvailability = async () => {
      try {
        const isAvailable = await Accelerometer.isAvailableAsync();
        if (isAvailable) {
          _rate();
          _subscribe();
        } else {
          console.error("Accelerometer is not available.");
        }
      } catch (error) {
        console.error("Error checking accelerometer availability:", error);
      }
    };

    checkAccelerometerAvailability();
    return () => _unsubscribe();
  }, []);

  const getOrientation = (data: AccelerometerMeasurement) => {
    const { x, y } = data;

    if (Math.abs(x) > Math.abs(y)) {
      setOrientation(x > 0 ? 90 : -90);
    } else {
      setOrientation(y > 0 ? 0 : 180);
    }
  };

  return orientation;
}
