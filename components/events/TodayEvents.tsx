import { Today } from '@/constants'
import React from 'react'
import Image from "next/image";
import { BiDislike, BiLike, BiShare } from "react-icons/bi";
import { Bookmark } from 'lucide-react';
import Common from './Common';

const TodayEvents = () => {
  return (
    <>
    <Common events={Today}/>
    </>
  );
}

export default TodayEvents
