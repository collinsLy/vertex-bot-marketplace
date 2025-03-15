
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Clock, 
  CheckCircle, 
  Bot,
  Calendar
} from "lucide-react";

// Sample data for order history
const orderHistory = [
  {
    id: "ORD-12345",
    productName: "Forex Fury",
    purchaseDate: "April 12, 2023",
    amount: 2000,
    status: "Completed",
    paymentMethod: "M-Pesa",
    transactionId: "MPESA1234567890",
    downloadAvailable: true
  },
  {
    id: "ORD-67890",
    productName: "1000pip Climber System",
    purchaseDate: "August 20, 2023",
    amount: 3539,
    status: "Completed",
    paymentMethod: "Credit Card",
    transactionId: "CC9876543210",
    downloadAvailable: true
  }
];

const OrderHistory = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Order History</h1>
        <p className="text-white/70 mt-1">View your past purchases and transaction details</p>
      </div>

      {orderHistory.length > 0 ? (
        <div className="space-y-6">
          {orderHistory.map((order) => (
            <Card key={order.id} className="glass-effect border-white/10 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/5">
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                        <Bot className="h-8 w-8 text-[#F2FF44]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-4/5">
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{order.productName}</h3>
                        <p className="text-white/70 text-sm">Order ID: {order.id}</p>
                      </div>
                      <div className="flex items-center mt-2 lg:mt-0">
                        {order.status === "Completed" && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {order.status}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-white/50" />
                        <div>
                          <p className="text-xs text-white/50">Purchase Date</p>
                          <p className="text-sm">{order.purchaseDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-white/50" />
                        <div>
                          <p className="text-xs text-white/50">Payment Method</p>
                          <p className="text-sm">{order.paymentMethod}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-white/50" />
                        <div>
                          <p className="text-xs text-white/50">Transaction ID</p>
                          <p className="text-sm">{order.transactionId}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-[#F2FF44]">
                        KES {order.amount.toLocaleString()}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/5">
                          <FileText className="h-4 w-4 mr-2" />
                          Invoice
                        </Button>
                        {order.downloadAvailable && (
                          <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-effect border-white/10 rounded-lg">
          <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <Clock className="h-10 w-10 text-white/50" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No purchase history</h3>
          <p className="text-white/70 max-w-md mx-auto mb-6">
            You haven't made any purchases yet. Visit our marketplace to find trading bots.
          </p>
          <Button asChild className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            <Link to="/dashboard/bots">Browse Bot Marketplace</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
