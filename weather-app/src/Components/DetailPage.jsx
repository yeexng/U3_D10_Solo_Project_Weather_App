import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const params = useParams();
  console.log(params);

  const [weatherInfo, setWeatherInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.detail}&APPID=4f3ad75b1f3061f3960859bcabb27b3d&units=metric`
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setWeatherInfo(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Card className="my-5">
        <Card.Header>
          <h1>{weatherInfo.name}</h1>
        </Card.Header>
        <Card.Body className="row">
          <Card.Text className="col-12">
            <div>
              Coordination:{" "}
              {weatherInfo.coord && (
                <span>
                  {weatherInfo.coord.lat}, {weatherInfo.coord.lon}
                </span>
              )}
            </div>
          </Card.Text>
          <Card.Text className="col-6">
            <div>
              {weatherInfo.main && (
                <p>
                  Temperature: {weatherInfo.main.temp} °C<br></br>
                  Feels like: {weatherInfo.main.feels_like} °C<br></br>
                  Humidity: {weatherInfo.main.humidity} %<br></br>
                  Pressure: {weatherInfo.main.pressure} hPa
                  <br></br>
                </p>
              )}
            </div>
          </Card.Text>
          <Card.Text className="col-6">
            <div>
              {(weatherInfo.weather || weatherInfo.wind) && (
                <p>
                  Description : {weatherInfo.weather[0].description} <br></br>
                  Cloudiness : {weatherInfo.weather[0].main} <br></br>
                  Wind Degree: {weatherInfo.wind.deg} °<br></br>
                  Gust: {weatherInfo.wind.gust} km/h
                  <br></br>
                  Wind Speed: {weatherInfo.wind.speed} km/h
                </p>
              )}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailPage;
