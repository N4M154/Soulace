import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const SubscribePage = () => {

    return (
        <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
            <Header />

            <div className="mt-12 bg-white shadow-xl rounded-lg p-10 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Subscribtion Page</h2>


                <Link
                    to="/daily-journal"
                    className="bg-white text-teal-600 py-3 px-8 rounded-lg hover:bg-teal-200 transition duration-300"
                >
                    Subscribe!
                </Link>



            </div>
        </div>
    );
};

export default SubscribePage;
