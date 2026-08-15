import { Image, Text, View } from "react-native";
import { getWeatherIcon } from "src/services/api";
import { weatherCarStyles } from "src/styles/weatherCar.styles";
import { WeatherData } from "src/types/weather";




interface WeatherCarProps {
  weather: WeatherData
}



export default function WeatherCar({ weather }: WeatherCarProps) {

  return (
    <View style={weatherCarStyles.card}>
      <Text style={weatherCarStyles.cityName}>{weather.name}</Text>

      {weather.weather[0] && <Image
        source={{ uri: getWeatherIcon(weather.weather[0].icon) }}
        style={weatherCarStyles.weatherIcon}
      />}

      <Text style={weatherCarStyles.temperature}>{weather.main.temp} °C</Text>

      {weather.weather[0] && <Text style={weatherCarStyles.description}>
        {weather.weather[0].description}
      </Text>}

      <View style={weatherCarStyles.detailsContainer}>
        <View style={weatherCarStyles.detailItems}>

          <Text style={weatherCarStyles.detailLabel}>Sensação Térmica:</Text>
          <Text style={weatherCarStyles.detailValue}>{Math.round(weather.main.feels_like)} °C</Text>
        </View>

        <View style={weatherCarStyles.detailItems}>
          <Text style={weatherCarStyles.detailLabel}>Umidade:</Text>
          <Text style={weatherCarStyles.detailValue}>{weather.main.humidity} %</Text>
        </View>

        <View style={weatherCarStyles.detailItems}>
          <Text style={weatherCarStyles.detailLabel} > Vento:</Text>
          <Text style={weatherCarStyles.detailValue}>{weather.wind.speed} m/s</Text>
        </View>


      </View>

    </View>
  )


}