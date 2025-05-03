"use client";

import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, Button, Card, Flex, View, Image } from '@aws-amplify/ui-react';
import React from "react";
import "../public/css/style.css";



export default function App() {
  return ( 
    <ThemeProvider>   
        <main>
            <Flex direction={{ base: 'column', large: 'row' }} width="100%" justifyContent="center" style={{ overflowY: 'auto'}} >
                <View width="100%" backgroundColor={{ base: 'white', large: 'white' }}  >
                    <h1>Foods Lover APP</h1>
                </View>
            </Flex>
            <br></br>
            
        </main>
    </ThemeProvider>
  );
}
