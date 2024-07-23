import { useState, useEffect } from 'react';
import { Accelerometer, AccelerometerMeasurement } from 'expo-sensors';

type AccelerometerData = {
  x: number;
  y: number;
  z: number;
};

export default function useDeviceOrientation(): number {
  const [{ x, y, z }, setData] = useState<AccelerometerData>({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState<any>(null);
  const [orientation, setOrientation] = useState<number>(0);

  const _slow = () => Accelerometer.setUpdateInterval(1000);

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
          _slow();
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
      if (x > 0) {
       setOrientation(90);
     
      } else {
        setOrientation(-90);
    
      }
    } else {
      if (y > 0) {
        setOrientation(0);
     
      } else {
        setOrientation(180);
       
      }
    }

    
  };

  return orientation;
}
