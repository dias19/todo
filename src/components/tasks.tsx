import React from 'react'
import { Box, Container } from '@mui/material'
import Navbar from './navbar'
import { Outlet } from 'react-router'
import SearchBar from './search-bar'
export default function Tasks() {
  return (
    <Container>
      <Navbar />
      <Box sx={{ marginTop: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <SearchBar />
        <Box sx={{ maxHeight: '60vh', overflowY: 'scroll' }}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  )
}
