import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/esm/Spinner";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Alert from "react-bootstrap/esm/Alert";

const MainPage = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4f3ad75b1f3061f3960859bcabb27b3d"
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

        <Card className="bg-dark text-white">
          <Card.Img
            src="https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>
              <h1>{weatherInfo.name}</h1>
            </Card.Title>
            <Card.Text>{}</Card.Text>
            <Card.Text>{}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </>
  );
};

export default MainPage;
