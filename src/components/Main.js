import main from "../mainbackgroundinstacart.webp";
import { Image } from "react-bootstrap";
// import { Container } from "react-bootstrap";

//text over greenishbackground and food to the right.
function Main() {
	return (
		<div style={{ backgroundColor: "#DEEDD6" }} className="row">
			<h1 style={{ width: "30vw", color: "#343538" }}>
				Order groceries for delivery or pickup today
			</h1>
			<Image
				style={{ width: "auto", height: "auto",}}
				src={main}
				alt="some green and yellow food"
				className="ms-auto"
			/>
		</div>
	);
}

export default Main;
