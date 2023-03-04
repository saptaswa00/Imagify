import React, { useState } from 'react';

import catpic from './images/animal/cat.jpg';
import catpic2 from './images/animal/cat2.jpg';
import dogpic from './images/animal/dog.jpg';
import dolphinpic from './images/animal/dolphin.jpg';
import dovepic from './images/animal/dove.jpg';
import eaglepic from './images/animal/eagle.jpg';
import eaglepic2 from './images/animal/eagle2.jpg';
import elephantpic from './images/animal/elephant.jpg';
import foxpic from './images/animal/fox.jpg';
import goatpic from './images/animal/goat.jpg';
import horsepic from './images/animal/horse.jpg';
import horsepic2 from './images/animal/horse2.jpg';
import lionpic from './images/animal/lion.jpg';
import monkeypic from './images/animal/monkey.jpg';
import owlpic from './images/animal/owl.jpg';
import parrotpic from './images/animal/parrot.jpg';
import parrotpic2 from './images/animal/parrot2.jpg';
import polarBearpic from './images/animal/polarBear.jpg';
import tigerpic from './images/animal/tiger.jpg';
import tortoisepic from './images/animal/tortoise.jpg';


const Album=()=>{

    // creating List variable and objects
    const photos = [
        {
            id:'0',
            name: 'Cat',
            type: 'pet',
            likes: 180,
            img_url: catpic
        },
        {
            id:'1', name: 'Black Cat', type: 'pet', likes: 91, img_url: catpic2
        },
        {
            id:'2', name: 'Dog', type: 'pet', likes: 220, img_url: dogpic
        },
        {
            id:'3', name: 'Dolphin', type: 'animal', likes: 76, img_url: dolphinpic
        },
        {
            id:'4', name: 'Dove', type: 'bird', likes: 88, img_url: dovepic
        },
        {
            id:'5', name: 'Eagle', type: 'bird', likes: 43, img_url: eaglepic
        },
        {
            id:'6', name: 'Eagle', type: 'bird', likes: 21, img_url: eaglepic2
        },
        {
            id:'7', name: 'Elephant', type: 'animal', likes: 51, img_url: elephantpic
        },
        {
            id:'8', name: 'Fox', type: 'animal', likes: 66, img_url: foxpic
        },
        {
            id:'9', name: 'Goat', type: 'animal', likes: 12, img_url: goatpic
        },
        {
            id:'10', name: 'Horse', type: 'animal', likes: 20, img_url: horsepic
        },
        {
            id:'11', name: 'Twin Horse', type: 'animal', likes: 20, img_url: horsepic2
        },
        {
            id:'12', name: 'Lion', type: 'animal', likes: 20, img_url: lionpic
        },
        {
            id:'13', name: 'Monkey', type: 'animal', likes: 20, img_url: monkeypic
        },
        {
            id:'14', name: 'Owl', type: 'bird', likes: 20, img_url: owlpic
        },
        {
            id:'15', name: 'Parrot', type: 'bird' , likes: 120, img_url: parrotpic
        },
        {
            id:'16', name: 'Parrot', type: 'bird' , likes: 110, img_url: parrotpic2
        },
        {
            id:'17', name: 'Polar Bear', type: 'animal', likes: 90, img_url: polarBearpic
        },
        {
            id:'18', name: 'Tiger', type: 'animal', likes: 95, img_url: tigerpic
        },
        {
            id:'19', name: 'Tortoise', type: 'pet', likes: 25, img_url: tortoisepic
        }
    ]

    // Using filters on photos to segrigate them based on type
    const[filteredphoto, setFilterphotos] = useState(photos);

    const filterfunction=(str)=>{
        if (str==="all") {
            setFilterphotos(photos);
        }
        else{
            setFilterphotos(photos.filter((item)=>
                item.type.toLowerCase().includes(str.toLowerCase())
    // to check under 'type' wheather string value present or not
    // we use 'includes' command
            ))  
        }
    }


    const sortfunction=(sortdata, x, y)=>{
        if(sortdata) {
          const sortedphotos = [...filteredphoto].sort((a,b)=>{
                return a[sortdata] > b[sortdata] ? x : y;
            })
            setFilterphotos(sortedphotos)
        }
    }



    return(
        <div>
        <div className='type'>
            <h1>Imagify</h1>
            <h2>by Saptaswa Basu</h2>
            <div className='typeAnimal'>
                <button onClick={()=>{filterfunction("all")}}>All</button>
                <button onClick={()=>{filterfunction("animal")}}>Animals</button>
                <button onClick={()=>{filterfunction("bird")}}>Birds</button>
                <button onClick={()=>{filterfunction("pet")}}>Pets</button>
            </div>
            <div className='filterLikes'>
                <button onClick={()=>{sortfunction("likes", "-1", "1")}}>Most Likes</button>
                <button onClick={()=>{sortfunction("likes", "1", "-1")}}>Least Likes</button>
            </div>
            <div className='filterNames'>
                <button onClick={()=>{sortfunction("name", "1", "-1")}}>Names(A-Z)</button>
                <button onClick={()=>{sortfunction("name", "-1", "1")}}>Names(Z-A)</button>
            </div>
        

            <div className='container' >
                {filteredphoto.map((item, index)=>{
                    return(
                        <div className='wrapper'  key={item.id}>
                            <div className='picture'>
                                <img src={item.img_url} alt={item.name} />
                            
                                <p className='index'>{index+1}</p>
                                <p className='name'>{item.name}</p>
                                <p className='like'>Likes : {item.likes}</p>
                            </div>
                        </div>
                    )
                    })
            };
            </div>
            </div>
            </div>        
    );
};

export default Album;