import React from 'react'
import image from '../../assets/hamburguer.jpeg'

const Product = () => {
  return (
    <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
    <span className='bg-red-100 border border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Hamburger</span>
    <img className='w-64 mx-auto tranform transition duration-300 hover:scale-105' src={image} alt="Imagem do produto"/>
    <div className='flex flex-col items-center my-3 space-y-2'>
    <h1 className='text-gray-900 text-lg'>Hamburger suculento</h1>
    <p className='text-gray-500 text-sm text-center'>Quis ex nostrud duis et. Ut veniam exercitation do velit aliqua proident aute ex. Id officia dolore nostrud ex velit Lorem sunt mollit duis sit laborum consequat. Nulla enim incididunt irure et Lorem. Irure anim voluptate labore ad proident incididunt sit dolore exercitation cillum. Est et est reprehenderit qui ea adipisicing labore elit esse laborum voluptate proident.</p>
    <h2 className='text-gray-900 text-zxl font-bold'>R$ 25,00</h2>
    <button className='bg-primary text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105'>Pedir agora</button>
    </div>
    </div>
  )
}

export default Product