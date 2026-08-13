import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { WeatherData } from 'src/types/weather';

export type weatherResult =
  { success: true, data: WeatherData } | { success: false, error: string };

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    q: '',
    units: 'metric',
    lang: 'pt_br'
  },
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getErrorMessage = (statusCode: number): string => {

  switch (statusCode) {
    case 400:

      return 'Requisição inválida';
    case 401:

      return 'Chave de acesso inválida';
    case 404:

      return 'Cidade não encontrada';
      case 429:

      return 'Servidor sobrecarregado. Tente novamente mais tarde';
      case 500:

      return 'Erro interno do servidor, tente novamente mais tarde';

      case 503:

      return 'Serviço indisponível, tente novamente mais tarde';

    default:
      return 'Erro ao buscar clima, tente novamente mais tarde';
  }

}



export const getCurrentWeather = async (cityName: string): Promise<weatherResult> => {
  try {
    const trimmedCity = cityName.trim();
    if (!trimmedCity) {
      return {
        success: false,
        error: 'Cidade não informada'
      }
    }
    const response = await api.get<WeatherData>('/weather', {
      params: {
        q: trimmedCity,
      }
    })

    return {
      success: true,
      data: response.data
    }


  } catch (err) {

    if (axios.isAxiosError(err)) {
      if (err.response) {
        return {
          success: false,
          error: getErrorMessage(err.response.status)
        }
      } else if(err.request) {
        return {
          success: false,
          error: 'Sem resposta do servidor, tente novamente mais tarde'
        }
      }
      else {
        return {
          success: false,
          error: 'Erro ao buscar clima, tente novamente mais tarde'
        }
      }
      
    }

    return {
      success: false,
      error: 'Erro ao buscar dados do clima'
    }
  }
}

  export const getWeatherIcon = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
