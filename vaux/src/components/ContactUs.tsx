import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";
const ContactUs = () => {
	return (
		<>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				Contact Us
			</Typography>
			<Box component="div" id="transition-modal-description">
				<List sx={{ listStyleType: "disc" }}>
					<ListItem sx={{ display: "list-item" }}>
						For any product usage related queries,
						<Typography component="span" sx={{ fontWeight: "bold" }}>
							{" "}
							write to{" "}
							<a className="text-blue-700" href="mailto:xyz@mail.com">
								xyz@mail.com
							</a>
						</Typography>
					</ListItem>
					<ListItem sx={{ display: "list-item" }}>
						<Typography component="p">
							If you are a business enterprise looking to buy software for your
							organization, we'd be glad to assist you!
							<Typography component="div" sx={{ fontWeight: "bold" }}>
								Email us at{" "}
								<a className="text-blue-700" href="mailto:xyz@mail.com">
									xyz@mail.com
								</a>
							</Typography>
						</Typography>
					</ListItem>
				</List>
			</Box>
		</>
	);
};
export default ContactUs;