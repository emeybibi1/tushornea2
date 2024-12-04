'use client'
import React, { useState } from 'react';
import { ShoppingCart, Truck, Clock, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('Snaks o Pasabocas Pequeños');
  const [currentSlide, setCurrentSlide] = useState(0);

  const businessInfo = {
    name: "TUsHornea2",
    location: "Bosque Transv. 54 no. 22A - 63",
    phone: "3046767572",
    hours: "L-S: 6:30 AM - 9:00 PM, D y Fest: 9:00 AM - 6:00 PM",
    social: {
      facebook: "TusHornea2",
      instagram: "@tushornea2"
    }
  };

  const deliveryZones = {
   free: "Domicilio gratis en toda la ciudad*",
   paid: {
     "Turbaco": 10000,
     "La Boquilla": 10000,
     "Serena del Mar": 18000,
     "Pasacaballo": 10000
   }
 };

 const products = {
   "Snaks o Pasabocas Pequeños": [
     {
       name: "Combo Hojaldre x015Und",
       price: 32000,
       components: [
         "3 Pastelitos de Pollo",
         "3 Pastelitos de Carne",
         "3 Pastelitos Jamón Queso",
         "3 Deditos Salchicha",
         "3 Deditos Queso",
         "1 Gaseosa litro"
       ]
     },
     {
       name: "Combo Hojaldre x040Und",
       price: 63000,
       components: [
         "8 Pastelitos de Pollo",
         "8 Pastelitos de Carne",
         "8 Pastelitos Jamón Queso",
         "8 Deditos Salchicha",
         "8 Deditos Queso",
         "1 Gaseosa litro"
       ]
     }
   ]
 };

  const renderProductCard = (product) => {
   return (
     <div key={product.name} className="bg-white rounded-lg shadow-xl p-6">
       <div className="mb-4">
         <h3 className="text-xl font-bold">{product.name}</h3>
         <p className="text-2xl font-bold text-red-600">${product.price.toLocaleString()}</p>
       </div>
       <ul className="space-y-2 mb-6">
         {product.components.map((component, idx) => (
           <li key={idx} className="flex items-center">
             <span className="mr-2">•</span>
             {component}
           </li>
         ))}
       </ul>
       <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
         <ShoppingCart className="h-5 w-5" />
         <span>Ordenar Ahora</span>
       </button>
     </div>
   );
 };

return (
   <div className="min-h-screen">
     {/* Header Info */}
     <div className="bg-red-900 text-white py-2">
       <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
         <div className="flex items-center space-x-4">
           <Phone className="h-4 w-4" />
           <span>{businessInfo.phone}</span>
           <Clock className="h-4 w-4 ml-4" />
           <span>{businessInfo.hours}</span>
         </div>
         <div className="flex items-center space-x-4">
           <Facebook className="h-4 w-4" />
           <Instagram className="h-4 w-4" />
         </div>
       </div>
     </div>

     {/* Hero Section */}
     <div className="relative h-[600px] bg-red-700">
       <div className="absolute inset-0 bg-black/40" />
       <div className="relative container mx-auto px-4 h-full flex items-center">
         <div className="text-white">
           <h1 className="text-5xl font-bold mb-4">{businessInfo.name}</h1>
           <p className="text-xl mb-8">Los mejores combos de comidas típicas a domicilio</p>
           <div className="flex items-center space-x-2">
             <Truck className="h-6 w-6" />
             <span>Domicilio GRATIS en zonas especificadas</span>
           </div>
         </div>
       </div>
     </div>

{/* Products Grid */}
     <div className="container mx-auto px-4 py-16">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {products["Snaks o Pasabocas Pequeños"].map(renderProductCard)}
       </div>
     </div>

     {/* Delivery Info */}
     <div className="bg-white py-16">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-8">Información de Entrega</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-green-50 p-6 rounded-lg">
             <h3 className="text-xl font-bold mb-4">Domicilio Gratis</h3>
             <p>{deliveryZones.free}</p>
           </div>
           <div className="bg-red-50 p-6 rounded-lg">
             <h3 className="text-xl font-bold mb-4">Zonas con Cargo Adicional</h3>
             <ul className="space-y-2">
               {Object.entries(deliveryZones.paid).map(([zone, price]) => (
                 <li key={zone} className="flex justify-between">
                   <span>{zone}</span>
                   <span className="font-bold">${price.toLocaleString()}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     </div>

{/* Footer */}
     <footer className="bg-red-900 text-white py-8">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div>
             <h3 className="text-xl font-bold mb-4">Contacto</h3>
             <p>{businessInfo.phone}</p>
             <p>{businessInfo.location}</p>
           </div>
           <div>
             <h3 className="text-xl font-bold mb-4">Horario</h3>
             <p>{businessInfo.hours}</p>
           </div>
           <div>
             <h3 className="text-xl font-bold mb-4">Síguenos</h3>
             <div className="flex space-x-4">
               <a href={`https://facebook.com/${businessInfo.social.facebook}`} className="hover:text-red-200">Facebook</a>
               <a href={`https://instagram.com/${businessInfo.social.instagram}`} className="hover:text-red-200">Instagram</a>
             </div>
           </div>
         </div>
         <div className="mt-8 pt-8 border-t border-red-800 text-center text-sm">
           <p>*Todos nuestros combos incluyen vasos y servilletas. Domicilio gratis a excepción de las zonas descritas.</p>
         </div>
       </div>
     </footer>
   </div>
 );
};

export default ProductCatalog;
