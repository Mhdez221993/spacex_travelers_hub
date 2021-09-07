import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../redux/configureStore';


function Dragons(props) {
 const [dragonsDisplay, setDragonsDisplay] = useState(null);
 const [calledDragon, setCalledDragon] = useState(null);

 useEffect(() => {
   const { dragons } = props;
   if (!calledDragon && dragons.length === 0) {
     setCalledDragon(true);
     props.getDragons();
   }
   if (dragons !== undefined && dragons !== dragonsDisplay) {
     setDragonsDisplay(dragons);
   }
 });