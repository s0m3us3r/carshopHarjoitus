/*Back End tarjoaa REST API:n, jonka avulla tietokannasta voi hakea autoja, lisätä uusia autoja sekä muokata ja poistaa autoja. Käyttöliittymään heillä on seuraavat tarpeet:

Lista, jossa käyttäjä näkee autot ja voi hakea ja järjestellä autoja eri kriteerien perusteella
Uusien autojen lisääminen
Autojen muokkaaminen ja poistaminen
Käyttäjäystävällinen ja responsiviinen käyttöliittymä
REST API:n osoite on seuraava: https://carrestservice-carshop.rahtiapp.fi/*/
//documentation: https://haagahelia-my.sharepoint.com/personal/h01270_haaga-helia_fi/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fh01270%5Fhaaga%2Dhelia%5Ffi%2FDocuments%2FFrontEndProgramming%2FCar%20Stock%20Restful%20API%2Epdf&parent=%2Fpersonal%2Fh01270%5Fhaaga%2Dhelia%5Ffi%2FDocuments%2FFrontEndProgramming&ga=1
import React, { useState } from 'react'
import './App.css'
import Carlist from './components/Carlist'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {


  return (

    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">
            CarShop
          </Typography>
        </Toolbar>
      </AppBar>

      <Carlist />
      
    </div>

  )
}

export default App
