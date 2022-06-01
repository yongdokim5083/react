import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const items = props.items.map((data) => (
    <ExpenseItem
      key={data.id}
      title={data.title}
      amount={data.amount}
      date={data.date}
    />
  ));

  return <Card className="expenses">{items}</Card>;
};

export default Expenses;
