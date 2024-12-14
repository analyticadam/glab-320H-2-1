function Header() {
	return (
		<h1 style={{ color: "yellow", textAlign: "center" }}>
			Welcome to My Star Wars React App
		</h1>
	);
}

function Content(props) {
	return (
		<p
			style={{
				color: props.color,
				textAlign: "center",
				padding: "10px",
				backgroundColor: "black",
				borderRadius: "5px",
			}}
		>
			{props.text}
		</p>
	);
}

function Footer() {
	return (
		<h3 style={{ color: "white", textAlign: "center" }}>
			Created by a Padawan Developer. May the Force be with you!
		</h3>
	);
}

function App() {
	return (
		<div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
			<Header />
			<Content
				color="blue"
				text="A long time ago in a galaxy far, far away, I built my first React app..."
			/>
			<Content
				color="red"
				text="The dark side of bugs is powerful, but debugging is the way of the Jedi."
			/>
			<Content
				color="green"
				text="Do or do not, there is no try... especially in coding!"
			/>
			<Footer />
		</div>
	);
}

export default App;
