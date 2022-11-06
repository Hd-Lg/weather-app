import { Paper, TextInput, Button, Text, Group } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
	const [cityInput, setCityInput] = useState("");
	const [weatherData, setWeatherData] = useState<any>({});

	async function getWeatherData() {
		try {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`
			);
			const data = await res.json();
			if (data?.cod === "400") throw data;
			setWeatherData(data);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div
			style={{
				position: "static",
				height: "100vh",
				backgroundImage:
					"url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
				backgroundSize: "cover",
			}}>
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}>
				<Paper withBorder p={"lg"} style={{ maxWidth: "500px" }}>
					<Group position="apart">
						<Text size={"xl"} weight={500}>
							Get the Weather!
						</Text>
					</Group>
					<Group position="apart">
						<Text size={"lg"}>
							Enter the city, and get the weather below.
						</Text>
					</Group>
					<Group position="apart" mb={"xs"}>
						<TextInput
							label="City Name"
							placeholder="ex: San Diego"
							onChange={(e) => setCityInput(e.target.value)}
						/>
					</Group>
					<Group position="apart">
						<Button
							variant="gradient"
							size="md"
							onClick={() => getWeatherData()}>
							Get weather
						</Button>
					</Group>
					{Object.keys(weatherData).length !== 0 ? (
						<>
							<Group position="left">
								<Text>{weatherData.name}</Text>
							</Group>
							<Group position="left">
								<Image
									src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`}
									width="100"
									height="100"
									alt="Icon weather"
								/>
								<Text size={"lg"} weight="500">
									Currently {weatherData.main.temp}&deg;C
								</Text>
							</Group>
						</>
					) : null}
				</Paper>
			</div>
		</div>
	);
}
