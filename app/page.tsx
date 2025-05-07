"use client";

import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, Button, Card, Flex, View, Image } from '@aws-amplify/ui-react';
import React from "react";
import "../public/css/style.css";
//import Image from "next/image";
import Link from "next/link";
import classes from './page.module.css';
import ImageSlideshow from "../components/images/image-slideshow";

/*
import type { Schema } from "../amplify/data/resource"
import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/api"
import outputs from "../amplify_outputs.json"
const client = generateClient<Schema>()

Amplify.configure(outputs)

client.queries.sayHello({
  name: "Amplify",
})
*/
export default function App() {
  return ( 
    <ThemeProvider> 
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>

        <main>
            <Flex direction={{ base: 'column', large: 'row' }} width="100%" justifyContent="center" style={{ overflowY: 'auto'}} >
                <View width="100%">
                  <section className={classes.section}>
                    <h2>How it works</h2>
                    <p>
                      NextLevel Food is a platform for foodies to share their favorite
                      recipes with the world. It&apos;s a place to discover new dishes, and to
                      connect with other food lovers.
                    </p>
                    <p>
                      NextLevel Food is a place to discover new dishes, and to connect
                      with other food lovers.
                    </p>
                  </section>
                </View>
            </Flex>

            <Flex direction={{ base: 'column', large: 'row' }} width="100%" justifyContent="center" style={{ overflowY: 'auto'}} >
                <View width="100%">
                  <section className={classes.section}>
                    <h2>Why NextLevel Food?</h2>
                    <p>
                      NextLevel Food is a platform for foodies to share their favorite
                      recipes with the world. It&apos;s a place to discover new dishes, and to
                      connect with other food lovers.
                    </p>
                    <p>
                      NextLevel Food is a place to discover new dishes, and to connect
                      with other food lovers.
                    </p>
                  </section>
                </View>
            </Flex>            
        </main>
    </ThemeProvider>
  );
}
