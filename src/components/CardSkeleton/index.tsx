import React from 'react';
import { Box, CardContent, Grid, Skeleton, Stack } from '@mui/material';


export const CardSkeletons = () => {
  return (
    <CardContent  >
      <Grid container spacing={4}  >

        <Grid display="flex" justifyContent="space-between" item xs={12} sm={6} md={2}>
          <Skeleton
            variant="rectangular"
            height={345}
            width={300}
            style={{ padding: '10px' }}
          />
        </Grid>

        <Grid display="flex" justifyContent="space-between" item xs={12} sm={6} md={2}>
          <Skeleton
            variant="rectangular"
            height={345}
            width={300}
            style={{ padding: '10px' }}
          />
        </Grid>

        <Grid display="flex" justifyContent="space-between" item xs={12} sm={6} md={2}>
          <Skeleton
            variant="rectangular"
            height={345}
            width={300}
            style={{ padding: '10px' }}
          />
        </Grid>

        <Grid display="flex" justifyContent="space-between" item xs={12} sm={6} md={2}>
          <Skeleton
            variant="rectangular"
            height={345}
            width={300}
            style={{ padding: '10px' }}
          />
        </Grid>

        <Grid display="flex" justifyContent="space-between" item xs={12} sm={6} md={2}>
          <Skeleton
            variant="rectangular"
            height={345}
            width={300}
            style={{ padding: '10px' }}
          />
        </Grid>

        <Grid display="flex" justifyContent="space-between" item xs={12} sm={6} md={2}>
          <Skeleton
            variant="rectangular"
            height={345}
            width={300}
            style={{ padding: '10px' }}
          />
        </Grid>
       
      </Grid>
    </CardContent>
  )
};