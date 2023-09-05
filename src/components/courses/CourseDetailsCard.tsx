import Head from "next/head";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Checkout - My Store</title>
      </Head>
      {/* Header */}
      <header className="bg-blue-500 py-4 text-white text-center">
        <h1 className="text-3xl font-semibold">Checkout</h1>
      </header>

      {/* Checkout content */}
      <main className="container mx-auto p-4">
        <section className="bg-white rounded-lg shadow-lg p-6">
          {/* User Information */}
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-input"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-input"
                placeholder="Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="johndoe@example.com"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="form-input"
                placeholder="555-555-5555"
              />
            </div>
          </div>
        </section>

        {/* Course Information */}
        <section className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Course Information</h2>
          <div>
            <label htmlFor="courseName" className="block text-gray-600">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              className="form-input"
              placeholder="Web Development 101"
            />
          </div>
          <div>
            <label htmlFor="courseDetails" className="block text-gray-600">
              Course Details
            </label>
            <textarea
              id="courseDetails"
              name="courseDetails"
              rows={4}
              className="form-textarea"
              placeholder="Course details..."
            />
          </div>
          <div>
            <label htmlFor="courseOwnerName" className="block text-gray-600">
              Course Owner Name
            </label>
            <input
              type="text"
              id="courseOwnerName"
              name="courseOwnerName"
              className="form-input"
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="coursePrice" className="block text-gray-600">
              Course Price
            </label>
            <input
              type="text"
              id="coursePrice"
              name="coursePrice"
              className="form-input"
              placeholder="$99.99"
            />
          </div>
        </section>

        {/* Shipping Address */}
        <section className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <div>
            <label htmlFor="address" className="block text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              placeholder="123 Main St"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-input"
              placeholder="Anytown"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="form-input"
              placeholder="CA"
            />
          </div>
          <div>
            <label htmlFor="postcode" className="block text-gray-600">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              className="form-input"
              placeholder="12345"
            />
          </div>
        </section>

        {/* Place order button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
          >
            Place Order
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Checkout;
