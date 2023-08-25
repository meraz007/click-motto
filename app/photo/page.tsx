import PhotoGallery from "@/components/photoGallery";
import Navbar from "@/components/navbar";
export default function Page() {
    const sliders = [
        {title: 'Workspace', imgSrc: 'img/slider-1.png'},
        {title: 'Summer', imgSrc: 'img/slider-2.png'},
        {title: 'City', imgSrc: 'img/slider-3.png'},
        {title: 'Food', imgSrc: 'img/slider-4.png'},
        {title: 'Gravity', imgSrc: 'img/slider-5.png'}
    ]
    return(
        <>
        <div className="px-2 sm:px-6 lg:px-8 dark:bg-white">
            <Navbar />
            <div className="px-2 md:px-10 bg-coverImage md:h-[700px] bg-no-repeat w-full bg-cover">
                <div className="mx-auto container flex items-center max-w-5xl h-[700px] ">
                    <div className="flex flex-col gap-4">
                        <h1 className="ml-10 leading-12 font-bold text-2xl md:text-[44px] text-white">Your local source of high quality images
                            and videos directly from their creators
                        </h1>
                        <div className="relative">
                            <img className="absolute right-10 top-6" src="img/search-icon.png" alt="" />
                            <input className="pl-10 rounded-[40px] w-full py-4 text-[22px] text-[#333333]" type="text" placeholder="Search photos and videos" />
                        </div>
                        <p className="ml-10 text-lg">Recommended: summer, food, covid-19, real estate, love</p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <p className="text-white float-right -mt-10">Photo of the Day by John Doe</p>
                <div className="bg-white -mt-28 px-6 py-3">
                    <h2 className="text-[#333333] text-[26px] font-semibold">Top categories</h2>
                    <div className="flex flex-col md:flex-row gap-2 relative">
                        {sliders.map(slide => 
                            <>
                            <div className="relative w-full md:w-[20%]">
                                <img src={slide.imgSrc} alt="slider Image" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-[#362c2a] opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold">{slide.title}</p>
                                </div>
                            </div>
                            </>
                        )}
                        <div className="cursor-pointer absolute -right-6 top-[40%] rounded-full bg-white w-[40px] h-[40px] shadow-2xl">
                            <img className="mt-3.5 ml-3" src="img/arrow-right.png" alt="arrow icon" />
                        </div>
                    </div>
                    <PhotoGallery />
            </div>
            </div>
        </div>
        </>
    )
}