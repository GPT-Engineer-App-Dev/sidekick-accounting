import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Sneaker Side-Hustle Accounting</h1>
      <p className="text-xl mb-8">Track your sneaker transactions with ease!</p>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/transactions">View Transactions</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/add-transaction">Add New Transaction</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;