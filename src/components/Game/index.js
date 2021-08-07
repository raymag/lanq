import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import "./styles.css";

export default function Game() {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState();
	const [messagesBottom, setMessagesBottom] = useState();
	const [game, setGame] = useState([]);
	const [players, setPlayers] = useState(undefined);
	const [socket, setSocket] = useState(undefined);

	const msgMax = 15;
	const apiPath = "https://language-play-back.herokuapp.com/";

	useEffect(() => {
		setSocket(socketIOClient(apiPath));
	}, []);

	useEffect(() => {
		// handle chat messages
		if (message !== undefined) {
			const tmpMsgs = [...messages, message];
			if (messages.length >= msgMax) {
				tmpMsgs.splice(0, 1);
			}
			setMessage(undefined);
			setMessages(tmpMsgs);
		}
	}, [message, messages]);

	useEffect(() => {
		// handle players change
		if (players !== undefined) {
			console.log("Updating players");
			setGame({ ...game, players: players });
			setPlayers(undefined);
		}
	}, [players, game]);

	useEffect(() => {
		// listen to socket events
		if (socket !== undefined) {
			socket.on("start", (data) => {
				console.log("\n[start]", data);
				setGame(data);
			});

			socket.on("message", (data) => {
				console.log("\n[message]", data);
				setMessage(data);
				messagesBottom.scrollIntoView({ behavior: "smooth" });
			});

			socket.on("update", (data) => {
				console.log("\n[update]", data);
				setGame(data);
			});

			socket.on("playerConnect", (data) => {
				console.log("\n[player connect]", data);
				setPlayers(data.players);
			});
		}
	}, [socket]);

	function send(e) {
		socket.emit("message", { text: e.target.value });
		e.target.value = "";
	}

	function keydown(e) {
		if (e.keyCode === 13 && e.target.value.replace(/ /gi, "") !== "") {
			send(e);
		}
	}

	return (
		<div id='game'>
			<div id='game-sidebar'>
				{game.length !== 0
					? Object.keys(game.players).map((playerId, index) => (
							<span key={index}>
								<b>{game.players[playerId].username}</b>:{" "}
								{game.players[playerId].score} pts
								<br />
							</span>
					  ))
					: ""}
			</div>
			<div id='game-holder'>
				<div id='game-show'>
					{game.length !== 0 ? (
						<>
							<span>
								<b>What is this in {game.lang}?</b>
							</span>
							<br />
							<img src={game.thumbnail} alt='thumbnail' />
						</>
					) : (
						""
					)}
				</div>
				<div id='game-chat'>
					<div id='game-chat-messages'>
						{messages.map((msg, index) =>
							msg.isCorrect ? (
								<span key={index} className='correct-answer'>
									<b>{msg.author}:</b> {msg.text}
									<br />
								</span>
							) : (
								<span key={index}>
									<b>{msg.author}:</b> {msg.text}
									<br />
								</span>
							)
						)}
						 <div style={{ opacity: 0 }} ref={(e) => setMessagesBottom(e)}>END</div>
					</div>
					<div id='game-chat-writer'>
						<input type='text' autoFocus onKeyDown={keydown} />
					</div>
				</div>
			</div>
		</div>
	);
}
