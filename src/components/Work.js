import React from 'react';
import be from '../assets/be.jpg';
import visit from '../assets/VisitCC.jpg'
import openHouse from '../assets/openHouse.jpg';
import laravel from '../assets/laravel-removebg-preview.png';
import dotnet from '../assets/net-removebg-preview.png';
import redis from '../assets/redis-removebg-preview.png';
import sqlServer from '../assets/sql_server-removebg-preview.png';

export default function Work() {
  return (
    <div className="py-20 sm:py-32"  id="work">
      <div className="mx-auto lg:px-8">
        <div className="justify-center lg:mx-0" >
          <h2 className="text-3xl font-bold tracking-tight text-white-400 text-center sm:text-4xl" >Whats my Work?</h2>
          <p className="mt-2 text-center leading-8 text-black-600">
            This my Portfolio since Vocational School until now
          </p>
        </div>
        <div className="flex flex-row mx-auto mt-10 items-center justify-center gap-6 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 md:flex flex-cols">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className='items-center'>
                <img src={visit} alt="" width={'250px'} className='items-center'/>
              </div>
              <div className="group relative">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">Website Untuk Peminjaman Ruangan (OnProgress) </p>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">Teknologi yang digunakan : </p>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-white-600">
                    <span className="absolute inset-0" />
                    Website Peminjaman Ruangan
                </h3>
                
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={dotnet} alt="" className="h-10 w-10 rounded-full" />
                <img src={redis} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <img src={sqlServer} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className='items-center'>
                <img src={openHouse} alt="" width={'250px'} className='items-center'/>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-white-600">
                    <span className="absolute inset-0" />
                    Website Registrasi Open House 
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">Website untuk mendata pengunjung saat acara open House 2023 </p>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">Teknologi yang digunakan : </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={dotnet} alt="" className="h-10 w-10 rounded-full" />
                <img src={sqlServer} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className='items-center'>
                <img src={be} alt="" width={'250px'} className='items-center'/>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white-900 group-hover:text-white-600">
                    <span className="absolute inset-0" />
                    Website Servis AC (Tugas Akhir SMK)
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">Website untuk tugas akhir SMK </p>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white-600">Teknologi yang digunakan : </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={laravel} alt="" className="h-10 w-10 rounded-full" />
              </div>
            </article>
        </div>
      </div>
    </div>
  )
}