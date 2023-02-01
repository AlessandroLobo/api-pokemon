import React from 'react';
import { Box, CardContent, Skeleton, Stack } from '@mui/material';
import { CardSkeletons } from '../CardSkeleton';


export const Skeletons = () => {
    return (
        <>
            <CardSkeletons/>
            <CardSkeletons/>
            <CardSkeletons/>
            <CardSkeletons/>
            <CardSkeletons/>
            <CardSkeletons/>
            <CardSkeletons/>
            <CardSkeletons/>
        </>
    );

}