
import React from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

// Sample order data - in a real app, this would come from a database
const orders = [
  {
    id: "ORD-2023-001",
    date: "2023-05-15",
    bot: "Forex Fury",
    price: "KES 2,000",
    status: "Completed",
  },
  {
    id: "ORD-2023-002",
    date: "2023-06-22",
    bot: "1000pip Climber System",
    price: "KES 3,539",
    status: "Completed",
  },
  {
    id: "ORD-2023-003",
    date: "2023-07-10",
    bot: "AI Trading Trends",
    price: "KES 16,803",
    status: "Completed",
  },
  {
    id: "ORD-2023-004",
    date: "2023-08-05",
    bot: "Forex Steam 10",
    price: "KES 5,246",
    status: "Completed",
  },
];

// Sample subscription data
const subscriptions = [
  {
    id: "SUB-2023-001",
    bot: "Forex Fury",
    plan: "Gold Subscription",
    startDate: "2023-05-15",
    renewalDate: "2024-05-15",
    price: "KES 2,000/year",
    status: "Active",
  },
];

const OrderHistory = () => {
  return (
    <div className="space-y-8">
      <Card className="border-white/10 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>Order History</CardTitle>
          <CardDescription className="text-white/70">
            View and manage your previous orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white">Order ID</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Bot</TableHead>
                <TableHead className="text-white">Price</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="border-white/10">
                  <TableCell className="font-medium text-white">{order.id}</TableCell>
                  <TableCell className="text-white/80">{order.date}</TableCell>
                  <TableCell className="text-white/80">{order.bot}</TableCell>
                  <TableCell className="text-white/80">{order.price}</TableCell>
                  <TableCell>
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-500">
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="h-8 border-white/20 text-white">
                        <FileText className="h-4 w-4 mr-1" />
                        Invoice
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 border-white/20 text-white">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>Active Subscriptions</CardTitle>
          <CardDescription className="text-white/70">
            View and manage your active subscriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {subscriptions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-white">Subscription ID</TableHead>
                  <TableHead className="text-white">Bot</TableHead>
                  <TableHead className="text-white">Plan</TableHead>
                  <TableHead className="text-white">Start Date</TableHead>
                  <TableHead className="text-white">Renewal Date</TableHead>
                  <TableHead className="text-white">Price</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions.map((sub) => (
                  <TableRow key={sub.id} className="border-white/10">
                    <TableCell className="font-medium text-white">{sub.id}</TableCell>
                    <TableCell className="text-white/80">{sub.bot}</TableCell>
                    <TableCell className="text-white/80">{sub.plan}</TableCell>
                    <TableCell className="text-white/80">{sub.startDate}</TableCell>
                    <TableCell className="text-white/80">{sub.renewalDate}</TableCell>
                    <TableCell className="text-white/80">{sub.price}</TableCell>
                    <TableCell>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-500">
                        {sub.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Link to="/dashboard/settings">
                        <Button size="sm" variant="outline" className="h-8 border-white/20 text-white">
                          Manage
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-6 text-white/70">
              <p>You don't have any active subscriptions.</p>
              <Link to="/dashboard/bots">
                <Button className="mt-4 bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                  Browse Bots
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderHistory;
