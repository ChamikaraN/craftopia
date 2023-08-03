import useFetchOrders from "@/hooks/order/useFetchOrders";

const Orders: React.FC = () => {
  const { data, isSuccess } = useFetchOrders();
  return (
    <>
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Orders</h1>
      </div>
      <div className="row">
        {/* Area Chart */}
        <div className="col">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Craftopia Order List
              </h6>
            </div>
            {/* Card Body */}
            <div className="card-body">
              {isSuccess && data.length > 0 ? (
                <table className="table table-borderless table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No of Products</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((order) => (
                      <tr key={order._id}>
                        <td>{order.products.length}</td>
                        <td>{order.customerName}</td>
                        <td>{order.shippingAddress}</td>
                        <td>{order.contactNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No Data</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
