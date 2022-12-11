import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Error from './error';
import Loader from './loader';
import './style.css';

type Props = {
  className: string;
  endpoint: string;
  title: string;
  homepage: string;
};

type Payload = {
  feed: string;
  items: Item[];
};

type Item = {
  title: string;
  pubDate: string;
  link: string;
};

export const Section = (props: Props) => {
  const { className, endpoint, title, homepage } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    const rssEndpoint = `https://api.rss2json.com/v1/api.json?rss_url=${endpoint}`;
    axios
      .get(rssEndpoint)
      .then(response => response.data)
      .then((data: Payload) => {
        setItems(data.items);
      })
      .catch(err => {
        setError(JSON.stringify(err));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]);

  if (error) return <Error />;

  return (
    <div className="section">
      <h2 className={`title ${className}`}>
        <a className="link" href={homepage} target="_blank">
          <span className="symbol">{title.charAt(0)}</span>
          <span className="text">{title}</span>
        </a>
      </h2>
      {error && <Error />}
      {loading && <Loader />}
      {Boolean(items.length) && (
        <div className="items-container">
          {items.map((item, index) => (
            <p className="item" key={index.toString()}>
              <a className="link" href={item.link} target="_blank">
                <span className="symbol">{(index + 1).toString()}</span>
                <span className="text">{item.title}</span>
              </a>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
