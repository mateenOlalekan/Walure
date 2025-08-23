import React from "react";
import { useState } from "react";
import { Search, Plus, Trash2, Edit, Filter, Download, MoreVertical } from "lucide-react";



export default function StatusTable() {
  const [records, setRecords] = useState([
    { id: 1, invoice: "INV-001", customer: "John Doe", price: 120, status: "Paid", date: "2023-04-15" },
    { id: 2, invoice: "INV-002", customer: "Jane Smith", price: 250, status: "Pending", date: "2023-04-16" },
    { id: 3, invoice: "INV-003", customer: "Mike Lee", price: 180, status: "Cancelled", date: "2023-04-17" },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [newRecord, setNewRecord] = useState({
    invoice: "",
    customer: "",
    price: "",
    status: "Pending",
    date: new Date().toISOString().split('T')[0]
  });
  const [editingId, setEditingId] = useState(null);
  const [editRecord, setEditRecord] = useState(null);

  const handleAdd = () => {
    if (!newRecord.invoice || !newRecord.customer || !newRecord.price) return;
    
    setRecords([
      ...records,
      {
        id: Date.now(),
        invoice: newRecord.invoice,
        customer: newRecord.customer,
        price: Number(newRecord.price),
        status: newRecord.status,
        date: newRecord.date
      },
    ]);
    setNewRecord({ 
      invoice: "", 
      customer: "", 
      price: "", 
      status: "Pending",
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setRecords(records.filter((r) => r.id !== id));
    }
  };

  const startEdit = (record) => {
    setEditingId(record.id);
    setEditRecord({...record});
  };

  const saveEdit = () => {
    if (!editRecord) return;
    
    setRecords(records.map(r => 
      r.id === editingId ? editRecord : r
    ));
    setEditingId(null);
    setEditRecord(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditRecord(null);
  };

  const filteredRecords = records.filter(
    (r) =>
      (r.invoice.toLowerCase().includes(search.toLowerCase()) ||
      r.customer.toLowerCase().includes(search.toLowerCase())) &&
      (statusFilter === "All" || r.status === statusFilter)
  );

  const statusOptions = ["All", "Paid", "Pending", "Cancelled"];

  const getStatusClass = (status) => {
    switch(status) {
      case "Paid": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const totalValue = filteredRecords.reduce((sum, record) => sum + record.price, 0);

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Invoice Management</h2>
          <p className="text-sm text-gray-500">Manage and track all invoices in one place</p>
        </div>

      </div>

      {/* Add Record Form */}
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
        <h3 className="text-lg font-medium text-blue-800 mb-3">Add New Invoice</h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
          <input
            type="text"
            placeholder="Invoice ID"
            className="border border-gray-300 text-sm rounded-lg px-3 py-2 focus:ring-2 outline:none focus:ring-blue-500 focus:border-blue-500 md:col-span-2"
            value={newRecord.invoice}
            onChange={(e) => setNewRecord({ ...newRecord, invoice: e.target.value })}
          />
          <input
            type="text"
            placeholder="Customer Name"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline:none focus:border-blue-500 md:col-span-3"
            value={newRecord.customer}
            onChange={(e) => setNewRecord({ ...newRecord, customer: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline:none focus:border-blue-500 md:col-span-2"
            value={newRecord.price}
            onChange={(e) => setNewRecord({ ...newRecord, price: e.target.value })}
          />
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500  focus:border-blue-500 md:col-span-2"
            value={newRecord.status}
            onChange={(e) => setNewRecord({ ...newRecord, status: e.target.value })}
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-2 outline:none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 md:col-span-2"
            value={newRecord.date}
            onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
          />
          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-3 py-2 hover:bg-blue-700 transition-colors md:col-span-1"
            disabled={!newRecord.invoice || !newRecord.customer || !newRecord.price}
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search invoices or customers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">Total Invoices</p>
          <p className="text-2xl font-semibold text-gray-800">{filteredRecords.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-green-600">Paid</p>
          <p className="text-2xl font-semibold text-green-800">
            {filteredRecords.filter(r => r.status === "Paid").length}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-600">Pending</p>
          <p className="text-2xl font-semibold text-yellow-800">
            {filteredRecords.filter(r => r.status === "Pending").length}
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-600">Total Value</p>
          <p className="text-2xl font-semibold text-blue-800">${totalValue}</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecords.length > 0 ? (
              filteredRecords.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {editingId === r.id ? (
                      <input
                        type="text"
                        className="border rounded px-2 py-1 w-full"
                        value={editRecord?.invoice || ""}
                        onChange={(e) => setEditRecord(prev => prev ? {...prev, invoice: e.target.value} : null)}
                      />
                    ) : (
                      r.invoice
                    )}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                    {editingId === r.id ? (
                      <input
                        type="text"
                        className="border rounded px-2 py-1 w-full"
                        value={editRecord}
                        onChange={(e) => setEditRecord( e.target.value)}
                      />
                    ) : (
                      r.customer
                    )}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                    {editingId === r.id ? (
                      <input
                        type="date"
                        className="border rounded px-2 py-1"
                        value={editRecord?.date || ""}
                        onChange={(e) => setEditRecord(prev => prev ? {...prev, date: e.target.value} : null)}
                      />
                    ) : (
                      r.date
                    )}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                    {editingId === r.id ? (
                      <input
                        type="number"
                        className="border rounded px-2 py-1 w-20"
                        value={editRecord?.price || 0}
                        onChange={(e) => setEditRecord(prev => prev ? {...prev, price: Number(e.target.value)} : null)}
                      />
                    ) : (
                      `$${r.price}`
                    )}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    {editingId === r.id ? (
                      <select
                        className="border rounded px-2 py-1"
                        value={editRecord?.status || ""}
                        onChange={(e) => setEditRecord(prev => prev ? {...prev, status: e.target.value} : null)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    ) : (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(r.status)}`}>
                        {r.status}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                    {editingId === r.id ? (
                      <div className="flex gap-2">
                        <button 
                          onClick={saveEdit}
                          className="text-green-600 hover:text-green-800"
                        >
                          Save
                        </button>
                        <button 
                          onClick={cancelEdit}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <button 
                          onClick={() => startEdit(r)}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(r.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-3 py-8 text-center text-gray-500">
                  <div className="flex flex-col items-center">
                    <Search className="w-12 h-12 text-gray-300 mb-2" />
                    <p>No invoices found</p>
                    <p className="text-sm">Try adjusting your search or filter</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}