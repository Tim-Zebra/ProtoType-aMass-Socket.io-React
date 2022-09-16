import React, { useState } from 'react'
import ColumnOne from './components/DashboardColumns/ColumnOne'
import ColumnTwo from './components/DashboardColumns/ColumnTwo'
import ColumnThree from './components/DashboardColumns/ColumnThree'

import { DashboardContainer, Column, WideColumn } from './Dashboard.styled'
import { useQuery } from '@apollo/client';
import { GET_USERS_KARMA, GET_ALL_KARMAPOSTS } from '../../utils/queries';


export default function Dashboard({ handlePageChange, isOpen, setIsOpen }) {
    // Get all users karma, so it can be passed to posts and used to display karma of postauthor
    const { data, loading } = useQuery(GET_USERS_KARMA);
    // Get all posts, so it can be passed down to col 2>posts and show posts
    const karmaPosts = useQuery(GET_ALL_KARMAPOSTS);

    if (!data) {
        return null;
    }
    // Displays differently during loading
    if (loading) {
        return <h2>LOADING...</h2>
    }

    if (!karmaPosts.data) {
        return null;
    }

    // Displays differently during loading
    if (karmaPosts.loading) {
        return <h2>LOADING...</h2>;
    }


    return (

        <DashboardContainer>

            <Column>
                <ColumnOne handlePageChange={handlePageChange} />
                <ColumnThree />
            </Column>

            <WideColumn>
                <ColumnTwo usersKarma={data} karmaPosts={karmaPosts.data.allKarmaPosts} handlePageChange={handlePageChange} isOpen={isOpen} setIsOpen={setIsOpen} />
            </WideColumn>

            

        </DashboardContainer>
    )
}