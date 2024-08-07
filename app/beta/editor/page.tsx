'use client';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import buttonStyles from '@/styles/buttonStyles';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    [{ align: [] }],
    [{ color: [] }],
    ['code-block'],
    ['clean'],
  ],
};

const quillFormats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'align',
  'color',
  'code-block',
];

export default function Home() {
  const [content, setContent] = useState('');
  const ref = React.useRef<HTMLDivElement>(null);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  if (process.env.NODE_ENV === 'production') {
    return <div>This page is not available in production.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="h-96 w-full">
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="mt-10 h-[70%] w-full bg-white"
        />
      </div>
      <div className="h-32 w-full border border-gray-light" ref={ref} contentEditable>
        {content}
      </div>
      <div>
        <button
          className={buttonStyles()}
          onClick={() => {
            console.log('content', content);
          }}
        >
          Save To Console
        </button>
        <button
          className={buttonStyles()}
          onClick={() => {
            if (ref && ref.current) {
              setContent(ref.current.innerText);
            }
          }}
        >
          To Editor
        </button>
      </div>
    </div>
  );
}
