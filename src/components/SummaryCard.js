import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SummaryCard() {
    return (
        <Card sx={{ maxWidth: 275 }, { borderRadius: 5 }}>
          <CardContent>
              Membership: <b>Active</b>
            <Typography>
              Member Since: <b>19-12-2021</b>
            </Typography>
            <Typography variant="body3">
                Next Payment: <b>06-01-2022</b>
            </Typography>
          </CardContent>
        </Card>
      );
}