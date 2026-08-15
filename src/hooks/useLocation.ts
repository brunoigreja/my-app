import * as Location from 'expo-location';
import { useState } from 'react';


interface Coordinates {
  latitude: number;
  longitude: number;
}

type LocationResult =
  { success: true; coordinates: Coordinates } |
  { success: false; error: string };

export const useLocation = () => {
  const [loading, setLoading] = useState(false)


  const getCurrentLocation = async (): Promise<LocationResult> => {

    try {

      setLoading(true)

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        return {
          success: false,
          error: 'Permissão de localização negada'
        }
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation
      });

      return {
        success: true,
        coordinates: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }
      }
    } catch (err) {

      return {
        success: false,
        error: 'Erro ao buscar localização'
      }
    } finally {
      setLoading(false)
    }
  }
  return {
    loading,
    getCurrentLocation
  }

}