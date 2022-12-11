import React from 'react';
import Section from './components/section';
import './App.css';

const endpoints = [
  {
    className: 'producthunt',
    url: 'https://www.producthunt.com/feed?category=undefined',
    name: 'ProductHunt',
    homepage: 'https://www.producthunt.com',
  },
  {
    className: 'hackernews',
    url: 'https://news.ycombinator.com/rss',
    name: 'HackerNews',
    homepage: 'https://news.ycombinator.com',
  },
  {
    className: 'designernews',
    url: 'https://www.designernews.co/?format=rss',
    name: 'DesignerNews',
    homepage: 'https://www.designernews.co',
  },
  {
    className: 'frontendfront',
    url: 'https://frontendfront.com/feed/stories',
    name: 'FrontEndFront',
    homepage: 'http://www.frontendfront.com/',
  },
  {
    className: 'echojs',
    url: 'http://www.echojs.com/rss',
    name: 'EchoJS',
    homepage: 'http://www.echojs.com/',
  },
  {
    className: 'lobsters',
    url: 'https://lobste.rs/rss',
    name: 'Lobsters',
    homepage: 'https://lobste.rs/',
  },
];

function App() {
  return (
    <div className="App">
      {endpoints.map((section, index) => (
        <Section
          className={section.className}
          key={index.toString()}
          endpoint={section.url}
          title={section.name}
          homepage={section.homepage}
        />
      ))}
    </div>
  );
}

export default App;
