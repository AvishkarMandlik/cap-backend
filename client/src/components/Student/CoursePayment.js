import React from 'react'

function CoursePayment() {
  const transactions = [
    {
      transID: '296120',
      date: '10/08/2024 11:54:57 AM',
      amount: '3155.00',
      status: 'Success',
      bankResponse: 'APPROVED OR COMPLETED SUCCESSFULLY',
    },
    {
      transID: '296120',
      date: '10/08/2024 11:54:57 AM',
      amount: '16645.00',
      status: 'Success',
      bankResponse: 'APPROVED OR COMPLETED SUCCESSFULLY',
    },
    {
      transID: '309278',
      date: '16/10/2024 12:03:18 PM',
      amount: '9585.00',
      status: 'Success',
      bankResponse: 'APPROVED OR COMPLETED SUCCESSFULLY',
    },
  ];

  const handlePrint = (transID) => {
    console.log(`Print receipt for transaction ID: ${transID}`);
    // Add logic to print the receipt
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">TransID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Bank Response</th>
            <th className="border border-gray-300 px-4 py-2">Receipt</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2 text-center">{transaction.transID}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{transaction.date}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{transaction.amount}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{transaction.status}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{transaction.bankResponse}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handlePrint(transaction.transID)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursePayment
