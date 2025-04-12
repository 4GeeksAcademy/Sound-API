import React, { useRef, useEffect, useState } from "react";

export default function Home() {
	const audioRef = useRef("/sound/files/mario/songs/castle.mp3");
	const [song, setSong] = useState([]);

	const getAllSong = async () => {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		try {
			const response = await fetch("https://playground.4geeks.com/sound/songs", requestOptions);
			const result = await response.json();
			setSong(result.songs);
			if (response.status === 200) {
				console.log(
					song.map((song) => {
						return song.name;
					})
				);
				console.log(
					song.map((song) => {
						return song.url;
					})
				);
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getAllSong();
	}, []);
	return (
		<>
			<div className="container mt-5">
				<div className="header d-flex justify-content-center">
					<h2>Sound-API</h2>
				</div>
				<div className="container">
					{song.map((song) => {
						return <p>{song.name}</p>;
					})}
				</div>
			</div>
			<button
				onClick={() => {
					getAllSong();
				}}>
				{" "}
				hola
			</button>
			<audio ref={audioRef} controls></audio>
		</>
	);
}
