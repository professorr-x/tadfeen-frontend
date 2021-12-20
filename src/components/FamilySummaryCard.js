import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FamilySummaryCard() {
    return (
        <Card sx={{ maxWidth: 275 }, { borderRadius: 5 }}>
          <CardContent>
            <Typography variant='h4' align='center' color={"#3492eb"}>
              <b>2</b>
            </Typography>
            <Typography variant="body">
                Members Covered
            </Typography>
          </CardContent>
        </Card>
      );
}