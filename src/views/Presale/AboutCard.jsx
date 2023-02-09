import { Paper, CardHeader, Tabs, Box, Typography, FormControl, OutlinedInput, InputAdornment } from "@material-ui/core";
export function AboutCard() {
  return (
    <Paper className="ohm-card">
      <Typography variant="h6">
        ● Token: XOD
      </Typography>
      <Typography variant="h6">
        ● Price per token: 7 DAI per XOD
      </Typography>
      <Typography variant="h6">
        ● Each address can buy a minimum of 250 DAI
      </Typography>
      <Typography variant="h6">
        ● Each Address can buy a maximum of 1000 DAI
      </Typography>
      <Typography variant="h6">
        ● Vesting Period: Linearly release over 15 days from launching date
      </Typography>
    </Paper>
  );
}