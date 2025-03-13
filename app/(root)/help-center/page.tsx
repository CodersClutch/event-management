import BrowseByTopic from "@/components/nav-links/Help-center/BrowseByTopic";
import FeaturedArticles from "@/components/nav-links/Help-center/FeaturedArticles";
import HelpSection from "@/components/nav-links/Help-center/HelpSection";
import React from "react";

const page = () => {
  return (
    <div className="pt-[8%] px-[3.5%]">
      <HelpSection />
      <FeaturedArticles />
      <BrowseByTopic />
    </div>
  );
};

export default page;
