import { Grid, Typography} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const CartTotal = () => {
    return (
        <Grid >
					<Grid >
						<Typography component={"h4"} >
							Cart Totals
						</Typography>

						<Grid >
							<Grid >
								<span >
									Subtotal:
								</span>
							</Grid>

							<Grid >
								<span >
									$79.65
								</span>
							</Grid>
						</Grid>

						<Grid >
							<Grid >
								<span >
									Shipping:
								</span>
							</Grid>

							<Grid >
								<p >
									There are no shipping methods available. Please double check your address, or contact us if you need any help.
								</p>
								
								<Grid >
									<span >
										Calculate Shipping
									</span>

									<Grid >
										<select >
											<option>Select a country...</option>
											<option>USA</option>
											<option>UK</option>
										</select><span/>
										<Grid >
									</Grid>

									<Grid >
										<input/>
									</Grid>

									<Grid >
										<input/>
									</Grid>
									
									<Grid >
										<Grid >
											Update Totals
										</Grid>
									</Grid>
										
								</Grid>
							</Grid>
						</Grid>

						<Grid >
							<Grid >
								<span >
									Total:
								</span>
							</Grid>

							<Grid >
								<span >
									$79.65
								</span>
							</Grid>
						</Grid>

						<button >
							Proceed to Checkout
						</button>
					</Grid>
				</Grid>
                </Grid>
    )
}