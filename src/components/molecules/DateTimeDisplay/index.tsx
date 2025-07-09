import { formatDate, formatTime } from "@/src/utils/dateTime";
import { useEffect, useState } from "react";
import { Container, Text } from "./styles";

const DateTimeDisplay: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Text>{formatDate(time)}</Text>
      <Text>{formatTime(time)}</Text>
    </Container>
  );
};

export default DateTimeDisplay;
