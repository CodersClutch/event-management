import { Online } from '@/constants'
import React from 'react'
import Image from "next/image";
import { BiDislike, BiLike, BiShare } from "react-icons/bi";
import { Bookmark } from 'lucide-react';
import Common from './Common';

const OnlineEvents = () => {
  return (
    <>
    <Common events={Online}/>
    </>
  );
}

export default OnlineEvents
