import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/esm/Spinner";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Alert from "react-bootstrap/esm/Alert";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const MainPage = (props) => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&APPID=4f3ad75b1f3061f3960859bcabb27b3d`
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
    <>
      <Container>
        {isLoading && ( // isLoading is true or false
          <Spinner animation="border" variant="success" />
        )}
        {isError && (
          <Alert variant="danger">Aww snap, we got an error!😨</Alert>
        )}

        <Card className="bg-dark text-white my-5">
          <Card.Img src="https://picsum.photos/500/150" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>
              <h1>{weatherInfo.name}</h1>
            </Card.Title>

            <Card.Text>
              <div>
                {weatherInfo.main && (
                  <p>
                    Temperature: {weatherInfo.main.temp} °F<br></br>
                    Feels like: {weatherInfo.main.feels_like} °F<br></br>
                  </p>
                )}
              </div>
            </Card.Text>

            <Button
              onClick={() => {
                navigate(`/city/${weatherInfo.name}`);
              }}
            >
              More Details
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
};

export default MainPage;
