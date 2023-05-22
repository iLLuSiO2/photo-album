import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#8BF5FA",
				textAlign: "center",
				marginTop: "-50px",
				marginBottom: "50px" }}>
			I wanted to finish this before your Birthday! But I couldn't. No matter what happens, lets stay the same!
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">I love you more</FooterLink>
			<FooterLink href="#">Tell everything to me!</FooterLink>
			<FooterLink href="#">This was really cringe! Sorry</FooterLink>
		</Column>

		<Column>
			<Heading>About This</Heading>
			<FooterLink href="#">Start: April 7, 2023</FooterLink>
			<FooterLink href="#">End: May 21, 2023</FooterLink>
			<FooterLink href="#">It is bad! But I did my best</FooterLink>
		</Column>

		<Column>
			<Heading>About You</Heading>
			<FooterLink href="#">Hot Girl!</FooterLink>
			<FooterLink href="#">Perfect</FooterLink>
			<FooterLink href="#">One of the most special person</FooterLink>
		</Column>
		
		
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
