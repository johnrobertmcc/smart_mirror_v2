import { useEffect, useState } from 'react';
import styles from './Budget.module.scss';
import cn from 'classnames';
import { getBudgetItems } from 'features/budget';

/**
 * Renders a display for the user's budget information if available in MongoDB.
 *
 * @author  John Robert McCann
 * @since   11/15/2022
 * @version 1.0.0
 * @return  {Element}     The Budget component.
 */
export default function Budget({className}) {
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

  return (
    <article className={cn(styles.container, className)}>
      test
      {/* {!!budget?.items ? createBudgetList() : 'No Transactions Available'} */}
    </article>
  );
}
