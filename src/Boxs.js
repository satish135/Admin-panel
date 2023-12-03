import React, { useState } from "react";
import './Boxs.css';

// ... existing imports ...

const Boxs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // You can fetch new data based on the newPage if needed
  };

  // Dummy data for demonstration
  const paymentHistoryData = [
    {
      id: 1,
      
      date: "2 March 2023, 13:45 PM",
      status: "Complete",
      amount: 50036,
    },
    {
      id: 1,
      
      date: "2 March 2023, 13:45 PM",
      status: "Complete",
      amount: 50036,
    },
    {
      id: 1,
      
      date: "2 March 2023, 13:45 PM",
      status: "Complete",
      amount: 50036,
    },
    {
      id: 1,
      
      date: "2 March 2023, 13:45 PM",
      status: "Complete",
      amount: 50036,
    },
    // Add more payment history items...
  ];

  // Items per page
  const itemsPerPage = 5;

  // Calculate start and end index based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = paymentHistoryData.slice(startIndex, endIndex);

  return (
    <div className="box">
      <div className="group">
        <div className="overlap">
          <div className="payment-history">
            <div className="overlap-group">
              
              <div className="div">
               <h2>Payment history</h2>
                <div className="list">
                  {displayedData.map((payment) => (
                    <div key={payment.id} className="element">
                      <div className="icon">
                        <img className="trending" alt="Trending" src="trending-7.svg" />
                      </div>
                      <div className="text">
                        <div className="text-wrapper">{payment.transactionNumber}</div>
                      </div>
                      <p className="p">{payment.date}</p>
                      <div className="text-wrapper-2">{payment.status}</div>
                      <div className="element-2">{payment.amount}</div>
                    </div>
                  ))}
                </div>
                {/* ... existing code ... */}
                <div className="pagination">
                  <p className="showing-from">
                    <span className="span">Showing </span>
                    <span className="text-wrapper-6">{startIndex + 1}-{endIndex}</span>
                    <span className="span"> from</span>
                    <span className="text-wrapper-6"> {paymentHistoryData.length}</span>
                    <span className="span"> data</span>
                  </p>
                  <div className="page">
                    <img className="dropdown" alt="Dropdown" src="dropdown.svg" />
                    <div className="overlap-group-wrapper">
                      {[1, 2, 3].map((page) => (
                        <div
                          key={page}
                          className={`overlap-group-2 ${page === currentPage ? "active" : ""}`}
                          onClick={() => handlePageChange(page)}
                        >
                          <div className="text-wrapper-7">{page}</div>
                        </div>
                      ))}
                    </div>
                    <img className="dropdown" alt="Dropdown" src="dropdown-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxs;
