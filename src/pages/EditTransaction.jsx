import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: "",
    amount: "",
    type: "",
    brand: "",
  });

  useEffect(() => {
    // In a real app, you would fetch the transaction data based on the id
    // For this example, we'll use mock data
    const mockTransaction = {
      id: 1,
      date: "2023-03-15",
      amount: 250,
      type: "Expense",
      brand: "Nike",
    };
    setTransaction(mockTransaction);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the data in your backend or state management
    console.log("Updated transaction:", transaction);
    navigate("/transactions");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Transaction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="type">Type</Label>
          <Select
            onValueChange={(value) => handleSelectChange("type", value)}
            defaultValue={transaction.type}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Income">Income</SelectItem>
              <SelectItem value="Expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="brand">Brand</Label>
          <Select
            onValueChange={(value) => handleSelectChange("brand", value)}
            defaultValue={transaction.brand}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nike">Nike</SelectItem>
              <SelectItem value="Adidas">Adidas</SelectItem>
              <SelectItem value="Puma">Puma</SelectItem>
              <SelectItem value="Reebok">Reebok</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Update Transaction</Button>
      </form>
    </div>
  );
};

export default EditTransaction;