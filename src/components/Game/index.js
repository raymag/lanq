import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import "./styles.css";

export default function Game() {
	const [currentMsg, setCurrentMSg] = useState("");
	const [messages, setMessages] = useState([]);
	const [messagesEnd, setMessagesEnd] = useState();

	const [game, setGame] = useState([]);
	const [firstTime, setFirstTime] = useState(true);
	const [socket, setSocket] = useState();

	const msgMax = 15;
	const apiPath = "https://language-play-back.herokuapp.com/";

	useEffect(() => {
		if (!firstTime) {
			if (socket === undefined) {
				setSocket(socketIOClient(apiPath));
			} else {
				socket.on("start", (data) => {
					console.log("[start]", data);
					setGame(data);
				});
				socket.on("update", (data) => {
					console.log("[update]", data);
					setGame(data);
				});
				socket.on("message", (data) => {
					let tempMessages = [...messages, data];
					if (messages.length >= msgMax) {
						tempMessages.splice(0, 1);
					}
					setMessages(tempMessages);
				});
				if (currentMsg !== "") {
					socket.emit("message", { text: currentMsg });
					setCurrentMSg("");
				}
			}
		} else {
			setFirstTime(false);
		}

		if (messagesEnd !== undefined) {
			messagesEnd.scrollIntoView({ behavior: "smooth" });
		}
	}, [messagesEnd, messages, firstTime, currentMsg, socket]);

	function send(e) {
		if (e.keyCode === 13 && e.target.value.replace(/ /gi, "") !== "") {
			setCurrentMSg(e.target.value);
			e.target.value = "";
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
						<div style={{ opacity: 0 }} ref={(e) => setMessagesEnd(e)}>
							END
						</div>
					</div>
					<div id='game-chat-writer'>
						<input type='text' autoFocus onKeyDown={send} />
					</div>
				</div>
			</div>
		</div>
	);
}
