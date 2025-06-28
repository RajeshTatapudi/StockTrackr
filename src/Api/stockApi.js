import axios from "axios";

const API_KEY = "B7QTHIU0ASY9HYXH";
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchStockData = async (symbol, range = "daily") => {
    const response = await axios.get(BASE_URL, {
    params: {
        function: range === "daily" ? "TIME_SERIES_DAILY" : range === "weekly" ? "TIME_SERIES_WEEKLY" : "TIME_SERIES_MONTHLY",
        symbol,
        apikey: API_KEY,
    },
    });
    // console.log("Response : "+response.data);

    const dataKey =
      range === "daily"
        ? "Time Series (Daily)"
        : range === "weekly"
        ? "Weekly Time Series"
        : "Monthly Time Series";
    return response.data[dataKey]; 
  };

  
