import { Paper, TextInput, Button, Text, Group } from "@mantine/core";
import { useState } from "react";

export default function Home() {
	const [cityInput, setCityInput] = useState("");

	async function getWeatherData() {
		console.log("Button pressed");
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
				</Paper>
			</div>
		</div>
	);
}
