import React from 'react'
import HomeLayouts from '../layouts/HomeLayouts'
import CardCourse from '../components/molecules/CardCourse'
import DropdownMenu from '../components/atoms/Dropdown'
import SearchProduct from '../components/atoms/SearchProduct'
import FilterSide from '../components/organisems/FilterSide'
import { NewspaperIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline'
import Pagination from '../components/atoms/Pagination'

const AllProduct = () => {
    return (
        <>
            <HomeLayouts>
                <main className="py-7 px-5 items-center md:px-[120px] md:py-16">
                    <div className="pb-x">
                        <h3 className="font-poppins font-semibold text-2xl lg:text-[32px]">
                        Koleksi Video Pembelajaran Unggulan
                        </h3>
                        <p className="font-dmsans font-normal text-sm tracking-extra-tight text-grayCustom pt-x lg:text-base">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <div className='flex flex-col w-full mb-6 bg-white border self-start gap-3 border-grayBorder rounded-x p-4 md:p-5 md:gap-4 md:w-1/3 md:mr-[42px]'>
                            <div className='flex items-center justify-between'>
                                <h6 className="font-poppins font-semibold text-lg text-grayCustom" >Filter</h6>
                                <span className='font-dmsans font-medium text-base tracking-extra-tight text-error'>Reset</span>
                            </div>
                            <FilterSide
                                icon={<NewspaperIcon />}
                                title="Bidang Studi"
                                items={["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"]}
                                type="checkbox"
                            />
                            <FilterSide
                                icon={<ShoppingBagIcon />}
                                title="Harga"
                                items={["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"]}
                                type="checkbox"
                            />
                            <FilterSide
                                icon={<ClockIcon />}
                                title="Durasi"
                                items={["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"]}
                                type="radio"
                            />
                        </div>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between md:justify-end mb-6 gap-4'>
                                <DropdownMenu />
                                <SearchProduct />
                            </div>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-8'>
                                <CardCourse
                                    imageCourse="/pict/1.png"
                                    title="Big 4 Auditor Financial Analyst"
                                    description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                                    asmenImg="/pict/p1.png"
                                    asmenName="Jenna Ortega"
                                    asmenTitle="Senior Accountant"
                                    rateIcon="/pict/Rating.png"
                                    rating="3.5 (86)"
                                    price="Rp 300k"
                                />
                                <CardCourse
                                    imageCourse="/pict/2.png"
                                    title="Big 4 Auditor Financial Analyst"
                                    description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                                    asmenImg="/pict/p2.png"
                                    asmenName="Jenna Ortega"
                                    asmenTitle="Senior Accountant"
                                    rateIcon="/pict/Rating.png"
                                    rating="3.5 (86)"
                                    price="Rp 300k"
                                />
                                <CardCourse
                                    imageCourse="/pict/3.png"
                                    title="Big 4 Auditor Financial Analyst"
                                    description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                                    asmenImg="/pict/p3.png"
                                    asmenName="Jenna Ortega"
                                    asmenTitle="Senior Accountant"
                                    rateIcon="/pict/Rating.png"
                                    rating="3.5 (86)"
                                    price="Rp 300k"
                                />
                                <CardCourse
                                    imageCourse="/pict/4.png"
                                    title="Big 4 Auditor Financial Analyst"
                                    description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                                    asmenImg="/pict/p4.png"
                                    asmenName="Jenna Ortega"
                                    asmenTitle="Senior Accountant"
                                    rateIcon="/pict/Rating.png"
                                    rating="3.5 (86)"
                                    price="Rp 300k"
                                />
                                <CardCourse
                                    imageCourse="/pict/5.png"
                                    title="Big 4 Auditor Financial Analyst"
                                    description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                                    asmenImg="/pict/p5.png"
                                    asmenName="Jenna Ortega"
                                    asmenTitle="Senior Accountant"
                                    rateIcon="/pict/Rating.png"
                                    rating="3.5 (86)"
                                    price="Rp 300k"
                                />
                                <CardCourse
                                    imageCourse="/pict/6.png"
                                    title="Big 4 Auditor Financial Analyst"
                                    description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                                    asmenImg="/pict/p6.png"
                                    asmenName="Jenna Ortega"
                                    asmenTitle="Senior Accountant"
                                    rateIcon="/pict/Rating.png"
                                    rating="3.5 (86)"
                                    price="Rp 300k"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6 md:mt-8 md:justify-end items-center gap-[6px] bg-[#fffdf5]'>
                        <Pagination />
                    </div>
                </main>
            </HomeLayouts>
        </>
    )
}

export default AllProduct