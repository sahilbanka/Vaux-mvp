import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
import contactUsbanner from "assets/contactUs.svg";
const ContactUs = () => {
	return (
		<div className="grid  grid-cols-1 md:grid-cols-2 gap-4 items-center sm:text-lg 2xl:text-2xl">
			<div>
				<img src={contactUsbanner} alt="contact us" />
			</div>
			<div id="transition-modal-description">
				<List sx={{ listStyleType: "disc" }}>
					<ListItem sx={{ display: "list-item" }}>
						For any product usage related queries,
						<span className="text-bold">
							{" "}
							write to{" "}
							<a className="text-blue-700" href="mailto:xyz@mail.com">
								xyz@mail.com
							</a>
						</span>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<p>
							If you are a business enterprise looking to buy software for your
							organization, we'd be glad to assist you!
							<div style={{ fontWeight: "bold" }}>
								Email us at{" "}
								<a className="text-blue-700" href="mailto:xyz@mail.com">
									xyz@mail.com
								</a>
							</div>
						</p>
					</ListItem>
				</List>
			</div>
		</div>
	);
};
export default ContactUs;
