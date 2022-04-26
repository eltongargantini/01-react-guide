import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react/cjs/react.production.min';

function ExpenseItem(props) {
    const [setTitle, title] = useState();

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={setTitle='teste'}>Chance title</button>
        </Card>
    );
}

export default ExpenseItem;