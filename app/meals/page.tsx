"use client";

import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import React from 'react';

import { Amplify } from 'aws-amplify';

import { generateClient } from "aws-amplify/data";

import type { Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";
//import { uploadData, copy, remove } from "aws-amplify/storage";
//import { del } from 'aws-amplify/api';

Amplify.configure(outputs);

const client = generateClient<Schema>({
  authMode: 'apiKey',
});


export default function MealsPage(){

    const [mealsData, setMealeData] = React.useState([]);

    // Fetched Existing Meals List
    let hasFetchedMealsData = false;

    const HandleMealsDetail = async () => {
        if (!hasFetchedMealsData) {
            hasFetchedMealsData = true;
            
            const { data: meals, errors } = await client.models.meals.list({
                selectionSet: ['id', 'title'],      
            });

            console.log("Meals Data=>", meals);

            if (errors) {
                console.error("Error fetching courses:", errors);
              } else {                
                setMealeData(meals);
              }        
        
        }
    };


    React.useEffect(() => {
        HandleMealsDetail();
    }, []);
  

    console.log("Meals Data=>", mealsData);

    return <>
        <header className={classes.header}>
            <h1> 
                Delicios meals, crated { ''}    
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Choose your favorite recipe and cook it yourself. It is easy and fun!
            </p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>   
        <main className={classes.main}>
            <MealsGrid meals={[]} />
        </main>    
    </>
}