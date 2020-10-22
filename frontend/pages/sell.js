import Link from "next/link";

const Sell = (props) => (
  <div>
    <p>SELL!!</p>
    <Link href={"/sell"}>
      <a>Sell!</a>
    </Link>
  </div>
);

export default Sell;