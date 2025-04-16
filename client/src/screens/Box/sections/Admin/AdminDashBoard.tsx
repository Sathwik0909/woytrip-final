// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../../../api";
// import CardForm from "../../../../components/ui/Admin/CardForm";
// import { CardType } from "../../types/card";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiPlus, FiLogOut, FiEdit, FiTrash2, FiStar } from "react-icons/fi";
// import {
//   GiSightDisabled,
//   GiMeal,
//   GiMedicalPackAlt,
//   GiVideoCamera,
// } from "react-icons/gi";
// import { FaHotel, FaBus } from "react-icons/fa";
// import { useAuth } from "../../../../context/AuthContext";

// const AdminDashboard = () => {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const [cards, setCards] = useState<CardType[]>([]);
//   const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const { logout } = useAuth();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/admin/login");
//     }
//   }, [isAuthenticated, navigate]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchCards();
//     }
//   }, [isAuthenticated]);

//   const fetchCards = async () => {
//     try {
//       const response = await api.get("/cards");
//       setCards(
//         response.data.map((card: CardType) => ({
//           ...card,
//           features: card.features || {},
//         }))
//       );
//     } catch (error) {
//       console.error("Error fetching cards:", error);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await api.delete(`/cards/${id}`);
//       setCards((prev) => prev.filter((card) => card._id !== id));
//     } catch (error) {
//       console.error("Error deleting card:", error);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/admin/login");
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setSelectedCard(null);
//   };

//   if (!isAuthenticated) return null;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <ToastContainer position="top-center" autoClose={3000} />
//       <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-white flex items-center gap-2">
//             <span>🏔️ WoyTrip Admin</span>
//           </h1>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => {
//                 setSelectedCard(null);
//                 setShowForm(true);
//               }}
//               className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all"
//             >
//               <FiPlus className="text-lg" />
//               New Destination
//             </button>
//             <button
//               onClick={handleLogout}
//               className="p-2.5 hover:bg-white/10 rounded-lg text-white hover:text-red-100 transition-colors"
//               title="Logout"
//             >
//               <FiLogOut className="text-xl" />
//             </button>
//           </div>
//         </div>
//       </header>
//       <main className="max-w-7xl mx-auto px-6 py-8">
//         {(showForm || selectedCard) && (
//           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//             <CardForm
//               selectedCard={selectedCard}
//               setSelectedCard={setSelectedCard}
//               setCards={setCards}
//               fetchCards={fetchCards}
//               onClose={handleFormClose}
//             />
//           </div>
//         )}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {cards.map((card) => (
//             <div
//               key={card._id}
//               className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
//             >
//               {card.popular && (
//                 <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
//                   <FiStar className="text-white" />
//                   Popular
//                 </div>
//               )}
//               <div className="relative aspect-video overflow-hidden rounded-t-2xl">
//                 <img
//                   src={card.imageUrl}
//                   alt={card.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
//               </div>
//               <div className="p-5">
//                 <div className="flex justify-between items-start mb-4">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-1">
//                       {card.title}
//                     </h3>
//                     <div className="flex items-center gap-2 text-blue-600">
//                       <FaBus className="text-sm" />
//                       <span className="text-sm font-medium">
//                         {card.location}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => {
//                         setSelectedCard(card);
//                         setShowForm(true);
//                       }}
//                       className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                     >
//                       <FiEdit className="text-lg" />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(card._id)}
//                       className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                     >
//                       <FiTrash2 className="text-lg" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="border-t pt-4">
//                   <h4 className="text-sm font-semibold text-gray-600 mb-2">
//                     Features:
//                   </h4>
//                   <div className="grid grid-cols-3 gap-2">
//                     {card.features?.video && (
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <GiVideoCamera className="text-blue-500" /> Video
//                       </div>
//                     )}
//                     {card.features?.meals && (
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <GiMeal className="text-green-500" /> Meals
//                       </div>
//                     )}
//                     {card.features?.stay && (
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <FaHotel className="text-purple-500" /> Stay
//                       </div>
//                     )}
                    
//                     {card.features?.sightseeing && (
//                       <div className="flex items-center gap-2">
//                         <GiSightDisabled className="text-orange-500" />
//                         Tours
//                       </div>
//                     )}
//                     {card.features?.medical && (
//                       <div className="flex items-center gap-2">
//                         <GiMedicalPackAlt className="text-red-500" />
//                         Medical
//                       </div>
//                     )}
//                     {card.features?.transport && (
//                       <div className="flex items-center gap-2">
//                         <FaBus className="text-teal-500" />
//                         Transport
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../api";
import CardForm from "../../../../components/ui/Admin/CardForm";
import { CardType } from "../../types/card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiPlus, FiLogOut, FiEdit, FiTrash2, FiStar } from "react-icons/fi";
import {
  GiSightDisabled,
  GiMeal,
  GiMedicalPackAlt,
  GiVideoCamera,
} from "react-icons/gi";
import { FaHotel, FaBus } from "react-icons/fa";
import { useAuth } from "../../../../context/AuthContext";

const AdminDashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [cards, setCards] = useState<CardType[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchCards();
    }
  }, [isAuthenticated]);

// Update the fetchCards function to force fresh data
const fetchCards = async () => {
  try {
    const response = await api.get<CardType[]>("/cards", {
      params: { timestamp: Date.now() } // Cache buster
    });
    
    // Create new array references for React state
    setCards(response.data.map(card => ({
      ...card,
      features: card.features || {},
      // Ensure images array is new reference
      images: [...card.images] 
    })));
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/cards/${id}`);
      setCards((prev) => prev.filter((card) => card._id !== id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedCard(null);
    fetchCards();
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-center" autoClose={3000} />
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>🏔️ WoyTrip Admin</span>
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setSelectedCard(null);
                setShowForm(true);
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all"
            >
              <FiPlus className="text-lg" />
              New Destination
            </button>
            <button
              onClick={handleLogout}
              className="p-2.5 hover:bg-white/10 rounded-lg text-white hover:text-red-100 transition-colors"
              title="Logout"
            >
              <FiLogOut className="text-xl" />
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8">
        {(showForm || selectedCard) && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <CardForm
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              setCards={setCards}
              fetchCards={fetchCards}
              onClose={handleFormClose}
            />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card._id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {card.popular && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
                  <FiStar className="text-white" />
                  Popular
                </div>
              )}
              
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <div className="flex h-full">
                  {card.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image.url}
                      alt={card.title}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600">
                      <FaBus className="text-sm" />
                      <span className="text-sm font-medium">
                        {card.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedCard(card);
                        setShowForm(true);
                      }}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <FiEdit className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleDelete(card._id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Features:
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {card.features?.video && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <GiVideoCamera className="text-blue-500" /> Video
                      </div>
                    )}
                    {card.features?.meals && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <GiMeal className="text-green-500" /> Meals
                      </div>
                    )}
                    {card.features?.stay && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaHotel className="text-purple-500" /> Stay
                      </div>
                    )}

                    {card.features?.sightseeing && (
                      <div className="flex items-center gap-2">
                        <GiSightDisabled className="text-orange-500" />
                        Tours
                      </div>
                    )}
                    {card.features?.medical && (
                      <div className="flex items-center gap-2">
                        <GiMedicalPackAlt className="text-red-500" />
                        Medical
                      </div>
                    )}
                    {card.features?.transport && (
                      <div className="flex items-center gap-2">
                        <FaBus className="text-teal-500" />
                        Transport
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;