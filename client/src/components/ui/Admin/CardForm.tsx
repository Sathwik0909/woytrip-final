import React, { useState, useEffect } from "react";
import api from "../../../api";
import { CardType } from "../../../screens/Box/types/card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// In CardForm.tsx
import { FiPlus, FiCheck, FiX } from "react-icons/fi";
interface CardFormProps {
  selectedCard: CardType | null;
  setSelectedCard: (card: CardType | null) => void;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  onClose: () => void;
  fetchCards: () => void;
}

const CardForm = ({
  selectedCard,
  setSelectedCard,
  setCards,
  onClose,
  fetchCards,
}: CardFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price:"",
    images: [] as File[],
    features: {
      video: false,
      meals: false,
      stay: false,
      sightseeing: false,
      medical: false,
      transport: false,
    },
    popular: false,
    deleteImages: [] as string[],
  });
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<
    { url: string; publicId: string }[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedCard) {
      setFormData({
        title: selectedCard.title,
        location: selectedCard.location,
        price:selectedCard.price,
        images: [],
        features: selectedCard.features,
        popular: selectedCard.popular,
        deleteImages: [],
      });
      setExistingImages(selectedCard.images);
      setImagePreviews([]);
    }
  }, [selectedCard]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));

      // Create previews
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleRemoveNewImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (publicId: string) => {
    if (!publicId.startsWith('card_gallery/')) {
      toast.error("Invalid image identifier");
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      deleteImages: [...prev.deleteImages, publicId]
    }));
    setExistingImages(prev => prev.filter(img => img.publicId !== publicId));
  };

  const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      features: { ...prev.features, [e.target.name]: e.target.checked },
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      images: [],
      price:"",
      features: {
        video: false,
        meals: false,
        stay: false,
        sightseeing: false,
        medical: false,
        transport: false,
      },
      popular: false,
      deleteImages: [],
    });
    setImagePreviews([]);
    setExistingImages([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!selectedCard && formData.images.length === 0) {
      toast.error("Please upload at least one image");
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const formPayload = new FormData();
      
      // Append core fields
      formPayload.append("title", formData.title);
      formPayload.append("location", formData.location);
      formPayload.append("price", formData.price);
      formPayload.append("popular", formData.popular.toString());
      formPayload.append("features", JSON.stringify(formData.features));
  
      // Handle image deletions for updates
      if (selectedCard && formData.deleteImages.length > 0) {
        formPayload.append("deleteImages", JSON.stringify(formData.deleteImages));
      }
  
      // Append new images with proper field management
      formData.images.forEach((file, index) => {
        formPayload.append(`images`, file); // Field name must match backend expectation
      });
  
      if (selectedCard) {
        // Update existing card
        const { data: updatedCard } = await api.put<CardType>(
          `/cards/${selectedCard._id}`, 
          formPayload // Remove explicit headers
        );
  
        setCards(prev => prev.map(card => 
          card._id === updatedCard._id ? {
            ...updatedCard,
            images: updatedCard.images.filter(img => 
              !formData.deleteImages.includes(img.publicId))
          } : card
        ));
        toast.success("Destination updated successfully!");
      } else {
        // Create new card
        const { data: newCard } = await api.post<CardType>(
          "/cards/upload", 
          formPayload // Remove explicit headers
        );
        setCards(prev => [...prev, newCard]);
        toast.success("Destination created successfully!");
      }
  
      onClose();
    } catch (error: any) {
      const errorDetails = error.response?.data || {};
      const message = errorDetails.message || 
                      errorDetails.error?.message || 
                      "Operation failed. Please try again.";
      
      console.error("Submission error details:", {
        error: error.response?.data,
        request: error.config
      });
      
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl w-full max-w-2xl"
    >
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedCard ? "Edit Destination" : "New Destination"}
        </h2>
        <button
          type="button"
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title & Location */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formData.location}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, location: e.target.value }))
                }
              />
            </div>


            <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Price per Person
    </label>
    <input
      type="number"
      required
      className="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      value={formData.price}
      onChange={(e) =>
        setFormData(prev => ({ 
          ...prev, 
          price: e.target.value
        }))
      }
      min="0"
    />
  </div>
          </div>

          {/* Updated Image Upload Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {selectedCard ? "Add Images" : "Upload Images"}
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
                multiple
                required={!selectedCard && imagePreviews.length === 0}
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer block text-gray-600 hover:text-blue-600 text-center"
              >
                <div className="mb-2">
                  <FiPlus className="text-3xl mx-auto" />
                </div>
                <span className="text-sm">Click to upload multiple images</span>
              </label>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {existingImages.map((image) => (
                  <div key={image.publicId} className="relative group">
                    <img
                      src={image.url}
                      alt="Existing preview"
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    {formData.deleteImages.includes(image.publicId) ? (
                      <div className="absolute inset-0 bg-red-500/50 flex items-center justify-center rounded-lg">
                        <FiX className="text-white text-xl" />
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveExistingImage(image.publicId)
                        }
                        className="absolute top-1 right-1 p-1 bg-black/50 rounded-full hover:bg-red-500 transition-colors"
                      >
                        <FiX className="text-white text-sm" />
                      </button>
                    )}
                  </div>
                ))}

                {imagePreviews.map((preview, index) => (
                  <div key={preview} className="relative group">
                    <img
                      src={preview}
                      alt="New preview"
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveNewImage(index)}
                      className="absolute top-1 right-1 p-1 bg-black/50 rounded-full hover:bg-red-500 transition-colors"
                    >
                      <FiX className="text-white text-sm" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Features
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(formData.features).map(([feature, value]) => (
              <label
                key={feature}
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-colors ${
                  value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <input
                  type="checkbox"
                  name={feature}
                  checked={value}
                  onChange={handleFeatureChange}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 border rounded flex items-center justify-center ${
                    value
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-400"
                  }`}
                >
                  {value && <FiCheck className="text-white text-sm" />}
                </div>
                <span className="capitalize text-sm">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Popular Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <span className="text-sm font-medium text-gray-700">
            Mark as Popular
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.popular}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, popular: e.target.checked }))
              }
              className="sr-only"
            />
            <div
              className={`w-11 h-6 rounded-full transition-colors ${
                formData.popular ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transform transition-transform ${
                  formData.popular ? "translate-x-5 bg-white" : "bg-white"
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Form Footer */}
      <div className="p-6 border-t flex justify-end gap-4">
        <button
          type="button"
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="px-6 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center gap-2 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {selectedCard ? "Save Changes" : "Create Destination"}
        </button>
      </div>
    </form>
  );
};

export default CardForm;