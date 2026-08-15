import { ActivityIndicator, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { detailsStyles } from "src/styles/details.styles";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getCurrentWeather } from "src/services/api";
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/NativeComponent/NativeComponentRegistry";
import { WeatherData } from "src/types/weather";
import WeatherCar from "src/components/WeatherCar";



export default function Details() {
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { cityName } = useLocalSearchParams<{ cityName: string }>()

  useEffect(() => {
    if (cityName) getWeatherData()
  }, [cityName])

  const getWeatherData = async () => {
    setLoading(true)
    setError(null)

    const result = await getCurrentWeather(cityName as string)

    setLoading(false)

    if (result.success) {
      // console.log(result.data)
      setWeatherData(result.data)
    } else {
      setError(result.error)
    }
  }

  return (
    <SafeAreaView style={detailsStyles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={detailsStyles.container}>
        <TouchableOpacity style={detailsStyles.backButton} onPress={() => router.back()}>
          <Text style={detailsStyles.backButtonText}> ⬅️ Voltar</Text>
        </TouchableOpacity>

      {loading && (
        <View style={detailsStyles.header}>
          <Text style={detailsStyles.title}>Clima Atual</Text>
          <Text style={detailsStyles.subTitle}>Buscando: {cityName}</Text>

        </View >
      )}

      {loading && (
        <View style={detailsStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={detailsStyles.loadingText}>Carregando...</Text>

        </View>
      )}

      {!loading && error && (
        <View style={detailsStyles.errorContainer}>
          <Text style={detailsStyles.errorText} >{error}</Text>
          <TouchableOpacity onPress={getWeatherData} style={detailsStyles.retryButton}>
            <Text style={detailsStyles.retryButtonText}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      )}
      
      </ScrollView>

    </SafeAreaView>
  )

}