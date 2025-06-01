import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import {HeroTop, HeroEnd } from "../components/molecules/Hero";
import CardCourse from "../components/molecules/CardCourse";
import { Link } from "react-router-dom";

const HomePages = () => {
    return (
        <>
        <HomeLayouts>
            <main className="pt-7 px-5 items-center lg:px-[120px] lg:pt-16 md:px-[110px] md:pt-14">
                {/*section: Bg-Board */}
                <HeroTop />
                {/* <!-- Konten --> */}
                <section>
                    <div className="py-6 lg:pt-16 lg:pb-8">
                        <h3 className="font-poppins font-semibold text-2xl lg:text-[32px]">
                        Koleksi Video Pembelajaran Unggulan
                        </h3>
                        <p className="font-dmsans font-medium text-sm tracking-extra-tight text-grayCustom pt-x lg:text-base">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </div>
                </section>
                {/* <!-- Nav Konten --> */}
                <section>
                    <nav className="relative space-y-3">
                        <div className="font-dmsans font-medium text-sm tracking-extra-tight space-x-9 overflow-hidden whitespace-nowrap md:text-base">
                        <Link to="/semua-produk" className="text-[#F64920]">
                            Semua Kelas
                        </Link>
                        <a className="text-[#333333]" href="#">
                            Pemasaran
                        </a>
                        <a className="text-[#333333]" href="#">
                            Desain
                        </a>
                        <a className="text-[#333333]" href="#">
                            Pengembang Diri
                        </a>
                        <a className="text-[#333333]" href="#">
                            Bisnis
                        </a>
                        </div>
                        <div className="rounded-x bg-[#F64920] w-[52px] h-[6px]"></div>
                    </nav>
                </section>

                {/* <!-- Card --> */}
                <section className="mt-6 md:mt-8">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-8">
                        {/* <!-- card 1 --> */}
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
                        {/* <!-- card 2 --> */}
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
                        {/* <!-- card 3 --> */}
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
                        {/* <!-- card 4 --> */}
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
                        {/* <!-- card 5 --> */}
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
                        {/* <!-- card 6 --> */}
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
                        {/* <!-- card 7 --> */}
                        <CardCourse
                            imageCourse="/pict/7.png"
                            title="Big 4 Auditor Financial Analyst"
                            description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                            asmenImg="/pict/p7.png"
                            asmenName="Jenna Ortega"
                            asmenTitle="Senior Accountant"
                            rateIcon="/pict/Rating.png"
                            rating="3.5 (86)"
                            price="Rp 300k"
                        />
                        {/* <!-- card 8 --> */}
                        <CardCourse
                            imageCourse="/pict/8.png"
                            title="Big 4 Auditor Financial Analyst"
                            description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                            asmenImg="/pict/p8.png"
                            asmenName="Jenna Ortega"
                            asmenTitle="Senior Accountant"
                            rateIcon="/pict/Rating.png"
                            rating="3.5 (86)"
                            price="Rp 300k"
                        />
                        {/* <!-- card 9 --> */}
                        <CardCourse
                            imageCourse="/pict/9.png"
                            title="Big 4 Auditor Financial Analyst"
                            description="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik"
                            asmenImg="/pict/p9.png"
                            asmenName="Jenna Ortega"
                            asmenTitle="Senior Accountant"
                            rateIcon="/pict/Rating.png"
                            rating="3.5 (86)"
                            price="Rp 300k"
                        />
                    </div>
                </section>

                {/* Hero Down */}
                <HeroEnd />

                </main>
            </HomeLayouts>
        </>
    );
};

export default HomePages;
