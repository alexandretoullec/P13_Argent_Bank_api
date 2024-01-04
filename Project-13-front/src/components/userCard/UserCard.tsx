import "./userCard.scss";

interface accountProps {
  title: string;
  amount: string;
  amountDescription: string;
}

const UserCard = ({ title, amount, amountDescription }: accountProps) => {
  return (
    <section className="account">
      <div className="account_content_wrapper">
        <h3 className="account_title">{title}</h3>
        <p className="account_amount">{amount}</p>
        <p className="account_amount_description">{amountDescription}</p>
      </div>
      <div className="account_content_wrapper cta">
        <button className="transaction_button">View transactions</button>
      </div>
    </section>
  );
};

export default UserCard;
