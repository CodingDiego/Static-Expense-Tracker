import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {

    return ( 
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'></div>
           <h2>{props.title}</h2>
           <div className='expense-item__price'>${props.amount}</div>
        </div>
    );
}
 
export default ExpenseItem;