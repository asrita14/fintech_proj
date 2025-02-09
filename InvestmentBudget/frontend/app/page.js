"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const addTransaction = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/transactions/add", {
        user,
        item,
        price,
      });
      setTransactions([...transactions, response.data]);
      setUser("");
      setItem("");
      setPrice("");
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Investment Budgeting</h1>

      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Stock"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button onClick={addTransaction} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Transaction
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Transactions</h2>
      <ul className="space-y-2">
        {transactions.map((t, index) => (
          <li key={index} className="p-2 border rounded">
            {t.user} bought {t.item} for ${t.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
