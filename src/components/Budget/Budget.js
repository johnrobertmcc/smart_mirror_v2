import { useEffect, useState } from 'react';
import styles from './Budget.module.scss';
import cn from 'classnames';
import { getBudgetItems } from 'features/budget';
import dayjs from 'dayjs';
/**
 * Renders a display for the user's budget information if available in MongoDB.
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @return  {Element}     The Budget component.
 */
export default function Budget() {
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    async function fetchWrap() {
      let data = [];
      try {
        const response = await getBudgetItems();

        console.log('jr response', response);
        if (response?.items) {
          data = response;
        }
      } catch (e) {
        console.error(e);
      }
      setBudget(data);
    }
    fetchWrap();
  }, []);

  console.log('jr budget', budget);

  /**
   * Function used to create a list of most recent transactions of the user.
   *
   * @returns {Array} Returns an array with budget items as <li/>'s.
   */
  function createBudgetList() {
    const { budget: list = [] } = budget;

    let fin = [];
    let date = list?.[0]?.date;
    let dateList = [];

    for (let i = 0; i <= 4; i++) {
      const {
        item = '',
        amount = {},
        date: itemDate = null,
        tag = '',
      } = list[i];
      const listItem = createListItem(list[i]);

      console.log('jr', {
        i,
        item,
        date: new Date(itemDate).toLocaleDateString(),
      });
      if (
        new Date(itemDate).toLocaleDateString() ===
        new Date(date).toLocaleDateString()
      ) {
        if (!!item) {
          dateList.push(listItem);
        }
      } else {
        fin.push(createDateTransactions(date, dateList));
        dateList = [];
        date = itemDate;
        dateList.push(listItem);
      }
    }

    return fin;
  }

  function createListItem(itemReceived) {
    const { item = '', amount = {}, tag = '' } = itemReceived;
    return (
      <li>
        {item} - {amount?.$numberDecimal} {!!tag && '- ' + tag}
      </li>
    );
  }

  function createDateTransactions(date, array) {
    const interpolated = dayjs(date).format('YYYY-MM-DD');
    return (
      <ul className={cn(styles.list, interpolated)}>
        <h3>{interpolated}</h3>
        {array}
      </ul>
    );
  }
  return (
    <article className={styles.container}>
      {!!budget?.items ? createBudgetList() : 'No Transactions Available'}
    </article>
  );
}
