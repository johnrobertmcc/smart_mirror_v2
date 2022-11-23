import { useEffect, useState } from 'react';
import styles from './News.module.scss';
import cn from 'classnames';
import { NEWS_TOPICS } from './News.utils';
import { fetchNews } from 'functions/api';
import dayjs from 'dayjs';

/**
 * Renders rotating list of news from newsApi from topics described in utils.
 *
 * @see     https://newsapi.org/docs
 * @author  John Robert McCann
 * @since   11/16/2022
 * @version 1.0.0
 * @return  {Element}          The News component.
 */
export default function News() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    /**
     * Wrapper callback used to fetch weather and apply it to state.
     */
    async function fetchWrap() {
      let topics;
      topics = await Promise.all(NEWS_TOPICS.map((topic) => fetchNews(topic)));
      setNews(topics);
    }
    fetchWrap();
  }, []);

  if (!news) {
    return null;
  }

  return (
    <article className={cn(styles.news)}>
      {news.map((topic, i) => {
        const { articles = [], topic: heading = '' } = topic;
        return (
          <ul key={i} className={styles.list}>
            <h3>{heading}</h3>
            {articles?.map((article, i) => {
              const { source = {}, title = '', publishedAt = null } = article;

              return (
                <li className={styles.listItem} key={i}>
                  <h4>
                    {source?.name} - {dayjs(publishedAt).format('MM/DD/YYYY')}
                  </h4>
                  <h5>{title}</h5>
                </li>
              );
            })}
          </ul>
        );
      })}
    </article>
  );
}
