'use client';
import withAuth from '@/hoc/withAuth';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPage = () => {
  return (
    <div>
      <h1 className="text-center">Video Player</h1>
      <div className="mx-auto aspect-video w-full max-w-screen-sm">
        <ReactPlayer
          light
          playing
          height="100%"
          width="100%"
          url="https://youtu.be/5zFLm8bpAN8"
          controls
        />
      </div>
    </div>
  );
};

export default withAuth(VideoPage);
