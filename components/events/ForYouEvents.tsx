import React from 'react'
import {  Foryou } from "@/constants";
import Image from "next/image";
import { BiDislike, BiLike, BiShare } from "react-icons/bi";
import { Bookmark } from 'lucide-react';
import Common from './Common';


const ForYouEvents = () => {
  return (
    <>
    <Common events={Foryou}/>
    </>
  );
}

export default ForYouEvents
