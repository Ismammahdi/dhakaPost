import rounded from "../assets/rounded.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import dhaca from "../assets/dhaka.png";
import adv from "../assets/adv.png";
import bgSky from "../assets/bg-sky.jpg";
const Home = () => {
  return (
    <div className=" mt-10">
      <div className="container mx-auto ">
        <div className="flex w-[100%]">
          <div className="w-[65%]">
            <div className="border-t border-gray-200">
              <p className="text-sm block border-b border-gray-200">
                Policy privecy
              </p>
            </div>
            <div className="py-5 border-b border-gray-200">
              <h2 className="text-3xl font-bold">
                সাবেক কৃষিমন্ত্রী আব্দুর রাজ্জাকের ৭ দিনের রিমান্ড আবেদন
              </h2>
            </div>
            <div className="py-3">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <div className="img">
                    <img src={rounded} alt="" className="w-full rounded-full" />
                  </div>
                  <div className="">
                    <h2 className="text-sm">নিজস্ব প্রতিবেদক </h2>
                    <h2 className="text-sm">১৫ অক্টোবর ২০২৪, ১৪:১৩</h2>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-gray-600 block">
                    <div className="text-center">16</div>
                    <div>Shares</div>
                  </p>
                  <div className="icon-1 p-3 bg-gray-300 rounded-md">
                    <FaFacebookF className="w-4 h-4 "></FaFacebookF>
                  </div>
                  <div className="icon-2 p-3 bg-gray-300 rounded-md">
                    <FaWhatsapp className="w-4 h-4 "></FaWhatsapp>
                  </div>
                  <div className="icon-3 p-3 bg-gray-300 rounded-md">
                    <FaShare className="w-4 h-4 "></FaShare>
                  </div>
                  <div className="icon-4 p-3 bg-gray-300 rounded-md">
                    <FiCopy className="w-4 h-4 "></FiCopy>
                  </div>
                  <div className="icon-5 p-3 bg-gray-300 rounded-md">
                    <FiPrinter className="w-4 h-4 "></FiPrinter>
                  </div>
                  <div className="icon-6 p-2 bg-gray-300 rounded-md">
                    <h2>অ+</h2>
                  </div>
                  <div className="icon-7 p-2 bg-gray-300 rounded-md">
                    <h2>অ-</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* class item starts */}
            <div className="class-item">
              <img src={dhaca} alt="dhaca" className="w-full" />
              <p className="p-2 text-base font-semibold">
                বৈষম্যবিরোধী ছাত্র আন্দোলন চলাকালে ছাত্র-জনতার মিছিলে রাজধানীর
                নিউমার্কেট এলাকায় ব্যবসায়ী আব্দুল ওয়াদুদকে গুলি করে হত্যার
                অভিযোগে করা মামলায় গ্রেপ্তার সাবেক কৃষিমন্ত্রী ও আওয়ামী লীগের
                প্রেসিডিয়াম সদস্য ড. মো. আব্দুর রাজ্জাকের সাত দিনের রিমান্ড
                আবেদন করেছে ডিবি।
              </p>

              <div className="pt-3">
                <p className="text-xs text-center">বিজ্ঞাপন</p>
                <img src={adv} alt="adv" />
              </div>
              <div className="py-4 px-2">
                <p>
                  মঙ্গলবার (১৫ অক্টোবর) মামলার তদন্ত কর্মকর্তা ডিবি পুলিশের রমনা
                  জোনাল টিমের পুলিশ পরিদর্শক জাহাঙ্গীর আরিফ এ রিমান্ড আবেদন
                  করেন। ঢাকার অতিরিক্ত চিফ মেট্রোপলিটন ম্যাজিস্ট্রেট মাহবুবুল
                  হকের আদালতে তার উপস্থিতিতে রিমান্ডের বিষয়ে শুনানি হবে।
                </p>
                <p>
                  এর আগে রাজধানীর ইস্কাটন এলাকা থেকে সোমবার (১৪ অক্টোবর) রাত
                  পৌনে ৮টার দিকে আব্দুর রাজ্জাককে গ্রেপ্তার করে ডিবি।
                </p>
              </div>
            </div>
            <div>
              <div className="adv">
                <p className="text-xs text-center">বিজ্ঞাপন</p>
                <img src={bgSky} alt="advertisement" className="w-full" />
              </div>
              <div className="p-4">
                <div className=" ">
                  <p className="bg-blue-300 py-2 px-3 border border-blue-400">
                    আরও পড়ুন
                  </p>
                  <div className="border border-gray-400 py-2 px-3">
                    <p>
                      <div className="w-4 h-4 rounded-3xl bg-blue-500"></div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
