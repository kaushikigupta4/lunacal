"use client";

import React from "react";
import Layout from "./components/Layout";
import TabsWidget from "./components/TabsWidget";
import GalleryWidget from "./components/gallery/GalleryWidget";

export default function Page() {
  return (
    <Layout>
      <div className="flex flex-col items-end gap-6 p-6 w-full max-w-[850px] mx-auto">
        {/* Top widget - Tabs */}
        <TabsWidget />

        <GalleryWidget />
      </div>
    </Layout>
  );
}
